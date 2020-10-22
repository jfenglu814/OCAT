let request = require(`request`);
let axios = require('axios');
const config = require(`../Config`);
const baseURL = config.api.url + "/assessment";

//post assessment data
function postAssessment(req) {
  request.post(
    { url: "http://localhost:3000/assessment", form: req.body },
    (error, res, body) => {
      if (!error) {
        console.log(body);
      }
    }
  );
}

//get assessment data
async function getAssessmentList() {
  try {
    const response = await axios.get("http://localhost:3000/assessment");
    return response.data;
  } catch (err) {
    console.log(err);
  } 
};

//soft delete assessment data
async function deleteAssessment(id) {
  try {
    const response = await axios.delete("http://localhost:3000/assessment/" + id);

    return response.data;
  
  } catch (err) {
    console.log(err);
  }
  
};

module.exports = { postAssessment, getAssessmentList, deleteAssessment};
