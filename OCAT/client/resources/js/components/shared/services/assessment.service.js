import axios from "axios";
import React, {useState, createContext} from "react";

export const AssessmentsContext = createContext();

export const AssessmentsContextProvider = (props) =>{
  const [assessments, setAssessments] = useState([]);

  return(
    <AssessmentsContext.Provider value={{assessments, setAssessments}}>
      {props.children}
    </AssessmentsContext.Provider>
  )
}

//import api url from config.json

const baseURL = "http://localhost:4567/api/assessment";

export const saveAssessment = async (assessment) => {
  console.log(assessment);
  try {
    console.log(assessment);
    const response = await axios.post(baseURL, assessment);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const getAssessments = async() => {
  console.log("getAssessments called");
  
  try {
    //console.log(assessment);
    const response = await axios.get(baseURL);
    console.log("getAssessments called", response.data);
    return response.data;
    
  } catch (err) {
    console.log(err);
  }
};

//todo getAssessment
