const { AssessmentService } = require(`../../microservices`);
const { ResponseHandler } = require(`../../utils`);
const BASE_URL = `/assessment`;

module.exports = (server) => {
  server.get(BASE_URL, (req, res, next) => {
    console.log("get")
    const assessments = AssessmentService.getAllAssessment();
    res.send(assessments);
    
  });

  server.post(BASE_URL, (req, res, next) => {
    //console.log("post");
    console.log(req.body);
    AssessmentService.passAssessment(req.body);
    next();
  });

  server.del(BASE_URL, (req, res, next) => {
    res.send({ msg: "delete" });
    next();
  });
};
