const { AssessmentService } = require(`../../microservices`);
const { ResponseHandler } = require(`../../utils`);
const BASE_URL = `/assessment`;

module.exports = (server) => {
  server.get(BASE_URL, async (req, res, next) => {
    console.log("get")
    const assessments = await AssessmentService.getAllAssessments();
    console.log("passed microserices", assessments)
    //console.log(assessments);
    //res.send(assessments);
    res.send(assessments);
    next();
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
