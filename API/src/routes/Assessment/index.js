const { AssessmentService } = require(`../../microservices`);
const { ResponseHandler } = require(`../../utils`);
const BASE_URL = `/assessment`;

module.exports = (server) => {
  server.get(BASE_URL, (req, res, next) => {
    res.send({ msg: "get" });
    //AssessmentService
    //ResponseHandler(req.body, {}, {});
  });

  server.post(BASE_URL, (req, res, next) => {
    //res.send({ msg: "post" });
    console.log("post");
    console.log(req.body);
    console.log(res.json(AssessmentService.passAssessment(req.body)).body);
    next();
  });

  server.del(BASE_URL, (req, res, next) => {
    res.send({ msg: "delete" });
    next();
  });
};
