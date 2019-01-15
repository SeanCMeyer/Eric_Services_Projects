const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const db = require("../PSQLDB/Postgresql10mil-Controler");
const knex = require("knex");
require("dotenv").config({ path: __dirname + "/../../.env" });
console.log("eh?");

const port = process.env.PORT || process.env.DEV_PORT || 3005;

const app = express();

app.use(express.static(path.join(__dirname, "../public/")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.post("/api/projects/pg", (req, res) => {
  data = [...req.body];
  db.insert(data)
    .then(() => {
      knex("projects")
        .count("id")
        .then(response => {
          res.status(200);
          res.send(response);
        });
    })
    .catch(err => {
      res.status(412);
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`/api/projects/pg With attached PSQL listening on port: ${port}`);
});
