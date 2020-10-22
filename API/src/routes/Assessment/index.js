const { AssessmentService } = require(`../../microservices`);
const { ResponseHandler } = require(`../../utils`);
const BASE_URL = `/assessment`;

module.exports = (server) => {
  server.get(BASE_URL, async (req, res, next) => {
    const assessments = await AssessmentService.getAllAssessments();
    res.send(assessments);
    next();
  });

  server.post(BASE_URL, (req, res, next) => {
    AssessmentService.passAssessment(req.body);
    next();
  });

  server.del(BASE_URL + "/:id", async (req, res, next) => {
    await AssessmentService.deleteAssessment(req.params.id);
    res.send({ msg: "delete" });
    next();
  });
};
