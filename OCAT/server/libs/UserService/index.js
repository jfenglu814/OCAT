let request = require(`request`);
let axios = require('axios');
//const config = require(`../Config`);

const baseURL = "http://localhost:3000/user/register";
const sendUser = async (user) => {
    try {
      const response = await axios.post(baseURL, JSON.stringify(user));
      const parseRes = await response.json();

      console.log(parseRes);
    } catch (err) {
      console.log(err);
    }

    
};

module.exports = { sendUser};