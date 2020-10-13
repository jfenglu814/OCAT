import { element } from "prop-types";
import React, { Component, useContext, useEffect } from "react";
import { AssessmentsContextProvider, getAssessments, AssessmentsContext } from "../shared/services/assessment.service";

const AssessmentList = (props) => {
  const {assessments, setAssessments} = useContext(AssessmentsContext);
  useEffect(() => {
    async function fetchData(){
      try{
        const data = await getAssessments();
        console.log("useEffect", data); 
        setAssessments(data);
      } catch(err){
        console.log(err);
      }

    }
   fetchData();
   // data = getAssessments();
  //  console.log("useEffect", data);
  }, []);

  return (
    <div className="list-group">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Cat Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Instrument</th>
            <th scope="col">Score</th>
            <th scope="col">Risk Level</th>
            <th scope="col">Date of Entry</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {assessments && assessments.map(assessment => {
              return(
                <tr key={assessment.id}>
                 <td>{assessment.cat_name}</td>
                 <td>{assessment.cat_date_of_birth}</td>
                <td>{assessment.instrument}</td>
                <td>{assessment.score}</td>
                <td>{assessment.risk_level}</td>
               <td>{assessment.created_at}</td>
               <td>
               <button className="btn btn-danger">Delete</button>
               </td>
              </tr>
              ); 
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default AssessmentList;
