const jwt = require("jsonwebtoken");
require("dotenv").config()

module.exports = async(req, res, next) => {
    try{
        const jwtToken = req.header("token");

        if(!jwtToken){
            return res.send("not authorized");
        }

        const payload = jwt.verify(jwtToken, process.env.jwtSecret);

        req.user = payload.user;
        next();
    }catch(err){
        console.log(err);
        return res.send("Not authorized");
    }
}