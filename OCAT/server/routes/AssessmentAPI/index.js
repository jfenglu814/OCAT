const router = require(`express`).Router();
const express = require("express");
const { AssessmentService } = require(`../../libs`);
const { ErrorHandler } = require(`../../utils`);
//let request = require(`request`);
const { postData } = require("../../libs/AssessmentService");

router.get("/", async (req, res) => {
  //console.log(req);
  res.status(200).json({
    status: "success",
    data: {
      cats: ["bob", "garfield"],
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

router.post("/", async (req, res) => {
  console.log(req.body);
  postData(req);

  res.status(201).json({
    status: "success",
    data: {
      ...req.body,
    },
  });
});

router.put("/:id", async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: {
      cats: ["bob", "garfield"],
    },
  });
});

router.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(204).json({
    status: "success",
  });
});

exports.router = router;
exports.path = `/api/assessment`;
