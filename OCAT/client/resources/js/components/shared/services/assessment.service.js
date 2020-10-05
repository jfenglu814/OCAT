import axios from "axios";

//import api url from config.json

const baseURL = "http://localhost:4567/api/assessment";

export const saveAssessment = async (assessment) => {
  try {
    console.log(baseURL);
    //console.log(path);
    console.log(assessment);
    //test();
    const response = await axios.post(baseURL, assessment);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

//todo getAssessment

//export default axios.create({ baseURL: baseURL });
