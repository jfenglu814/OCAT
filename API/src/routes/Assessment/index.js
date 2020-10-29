const { AssessmentService } = require(`../../microservices`);
const { ResponseHandler } = require(`../../utils`);
const BASE_URL = `/assessment`;

module.exports = (server) => {
  //get assessment route
  server.get(BASE_URL, async (req, res, next) => {
    const assessments = await AssessmentService.getAllAssessments();
    res.send(assessments);
    next();
  });

  //post assessment route
  server.post(BASE_URL, (req, res, next) => {
    AssessmentService.passAssessment(req.body);
    next();
  });

  //delete assessment route
  server.del(BASE_URL + "/:id", async (req, res, next) => {
    await AssessmentService.deleteAssessment(req.params.id);
    res.send({ msg: "delete" });
    next();
  });
};
