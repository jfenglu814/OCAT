let request = require(`request`);
let axios = require('axios');
const config = require(`../Config`);
const baseURL = config.api.url + "/assessment";
//TODO: Handle backend API requests here

function postData(req) {
  request.post(
    { url: "http://localhost:3000/assessment", form: req.body },
    (error, res, body) => {
      if (!error) {
        console.log(body);
      }
    }
  );
}

async function getData() {
  try {
    console.log("getData() called");
    const response = await axios.get("http://localhost:3000/assessment");
    console.log(response.data);
    return response.data;
  
  } catch (err) {
    console.log(err);
  }
  
};

module.exports = { postData, getData };
