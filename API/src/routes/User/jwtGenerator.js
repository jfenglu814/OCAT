const jwt = require('jsonwebtoken')
require('dotenv').config();

function jwtGenerator(userId){
    const payload = {
        user: userId,
    }

    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: 60 * 60});
}

module.exports = jwtGenerator;