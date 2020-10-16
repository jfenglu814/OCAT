import axios from "axios";
import React, {useState, createContext} from "react";

//provides context data for the webapp.
export const AssessmentsContext = createContext();

export const AssessmentsContextProvider = (props) =>{
  const [assessments, setAssessments] = useState([]);

  return(
    <AssessmentsContext.Provider value={{assessments, setAssessments}}>
      {props.children}
    </AssessmentsContext.Provider>
  )
}

//TODO: import api url from config.json
const baseURL = "http://localhost:4567/api/assessment";

//http post request to post assessment
export const saveAssessment = async (assessment) => {
  try {
    const response = await axios.post(baseURL, assessment);
  } catch (err) {
    console.log(err);
  }
};

//http get request to get assessment
export const getAssessments = async() => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
    
  } catch (err) {
    console.log(err);
  }
};


