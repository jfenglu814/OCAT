import axios from "axios";

assessmentVariables = {};

export class AssessmentService {
  sendAssessment() {
    axios.post("/postAssessment").then((response) => {
      console.log(res);
    });
  }
}
