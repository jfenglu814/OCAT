import React, { Component, useEffect } from "react";
import { getAssessments } from "../shared/services/assessment.service";

const AssessmentList = () => {
  
  useEffect(() => {
    async function fetchData(){
      try{
        const data = await getAssessments();
        console.log("useEffect", data); 
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
          <tr>
            <td>Jeff</td>
            <td>03/12/1989</td>
            <td>Piano</td>
            <td>5</td>
            <td>high</td>
            <td></td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AssessmentList;
