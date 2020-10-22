const router = require(`express`).Router();
const express = require("express");
const { AssessmentService } = require(`../../libs`);
const { ErrorHandler } = require(`../../utils`);
const { postAssessment ,getAssessmentList, deleteAssessment } = require("../../libs/AssessmentService");

router.get("/", async (req, res) => {
  response = await getAssessmentList();
  
  res.send(response);
});

router.post("/", async (req, res) => {;
  postAssessment(req);
  res.status(201).json({
    status: "success",
    data: {
      ...req.body,
    },
  });
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      cats: ["bob", "garfield"],
    },
  });
});

router.delete("/:id", async (req, res) => {
  response = await deleteAssessment(req.params.id);
});

exports.router = router;
exports.path = `/api/assessment`;
