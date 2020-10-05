let request = require(`request`);
const config = require(`../Config`);
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

function getData(req) {}

module.exports = { postData, getData };
