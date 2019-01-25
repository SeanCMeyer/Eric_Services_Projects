const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const pgdb = require("../PSQLDB/Postgresql10mil-Controler");
const mongodb = require("../MONGODB/MongoDBHandler.js");
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "/../public/")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
require("dotenv").config({ path: __dirname + "/../../.env" });

const port = process.env.PORT || process.env.DEV_PORT || 3005;

app.get("/api/projects/pg/:project_id", (req, res) => {
  if (req.params.project_id === undefined) {
    res.status(412);
    res.send("ERROR: request must contain a project ID");
  } else {
    const project_id = req.params.project_id;
    pgdb.getProjectList(project_id).then(response => {
      res.status(200);
      res.send(response);
    });
  }
});

app.get("/api/projects/mongo/:project_id", (req, res) => {
  if (req.params.project_id === undefined) {
    res.status(412);
    res.send("ERROR: request must contain a project ID");
  } else {
    const project_id = req.params.project_id;
    mongodb.getProjectList(project_id, (err, response) => {
      console.log("working on it");
      if (err) {
        res.status(412);
        res.send(err);
      } else {
        res.status(200);
        res.send(response);
      }
    });
  }
});

app.listen(port, () => {
  console.log(
    `/api/projects/ With attached PSQL & MongoDB listening on port: ${port}`
  );
});
