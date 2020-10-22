const jwt = require('jsonwebtoken')
require('dotenv').config();

function jwtGenerator(userId){
    //payload is just userID
    //TODO: set user 
    const payload = {
        user: userId,
    }
    //expires in 60 seconds times 60  = one hour
    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: 60 * 60});
}

module.exports = jwtGenerator;