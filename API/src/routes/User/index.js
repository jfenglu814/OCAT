const { ResponseHandler } = require(`../../utils`);
const { IdentityService } = require(`../../microservices`);

const BASE_URL = `/user`;

module.exports = server => {
    server.post(BASE_URL, (req, res, next) => {
        //console.log("post");
        const {email, password, passwordCheck, displayName} = req.body;
        
        return res.json(req.body);
        
        next();
      });
};