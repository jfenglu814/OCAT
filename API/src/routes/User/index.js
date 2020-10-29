//Restify Routes for user authentication
const { ResponseHandler } = require(`../../utils`);
const { IdentityService, returnUser} = require(`../../microservices`);
const jwtGenerator = require("./jwtGenerator")
const bcrypt = require('bcrypt');
const authorization = require('../../utils/Middleware/authorization')

const BASE_URL = `/user`;
const REG_URL = BASE_URL + '/register';

module.exports = server => {
    //Register Route
    server.post(REG_URL, async (req, res, next) => {
        try{
            const {name, email, password} = req.body;
            
            //check if user exists
            const user = await IdentityService.returnUser(email);
            if (user != undefined)
            {
                return res.send("User already in database");
            }
            
            //bcrypt to hash user password
            const saltRound = 10;
            const salt = await bcrypt.genSalt(saltRound);
            const bcryptPassword = await bcrypt.hash(password, salt);
            
            //enter User to database
            const newUser = await IdentityService.registerUser(name, email, bcryptPassword)

            //generate jwt token
            const token = jwtGenerator(newUser.attributes.id)

            return res.json({token});
        }catch(err){
            console.log(err);

        }
        next();
    });

    //Login Route
    server.post(BASE_URL, async (req, res, next) => {
        try{
            const {email, password} = req.body;
            //check user is in database
            const user = await IdentityService.returnUser(email);
            if (user === undefined)
            {
              return res.send("Email or Password is incorrect");
            }
            
            //check if password matches
            const passwordCheck = await bcrypt.compare(password, user.password);
            if (!passwordCheck){
                return res.send("Email or Password is incorrect");
            }

            //pass jwt token
            const token = jwtGenerator(user.id)
            return res.json({token});


        }catch(err){
            console.log(err);
        }
        next();
    });

    //verify jwt token. Passes through authorization middleware
    server.get('/user/is-verify',  authorization, async (req, res, next) => {
        try{
            res.send(true);

        }catch(err){
            console.log(err);
        }
        next();
    });
};