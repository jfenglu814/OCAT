import axios from "axios";
//import { path } from "../../../../../../server/routes/AssessmentAPI";
//for some reason above import statement can't find module 'fs'

//import api url from config.json
//import path from api router
//use axios to pass
const baseURL = "http://localhost:8000/api/assessment";

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

//export default axios.create({ baseURL: baseURL });
