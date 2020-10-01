let request = require(`request`);
const config = require(`../Config`);

const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/api/assessment", async (req, res) => {
  //console.log(req);
  res.status(200).json({
    status: "success",
    data: {
      cats: ["bob", "garfield"],
    },
  });
});

app.get("/api/assessment/:id", async (req, res) => {
  console.log(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      cats: ["bob", "garfield"],
    },
  });
});

app.post("/api/assessment", async (req, res) => {
  console.log(req.body);
  //res.redirect("http://localhost:3000/assessment");
  request.post(
    { url: "http://localhost:3000/assessment", form: req.body },
    (error, res, body) => {
      if (!error) {
        console.log(body);
      }
    }
  );
  res.status(201).json({
    status: "success",
    data: {
      ...req.body,
    },
  });
});

app.put("/api/assessment/:id", async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: {
      cats: ["bob", "garfield"],
    },
  });
});

app.delete("/api/assessment/:id", async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(204).json({
    status: "success",
  });
});

app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});
