const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const knex = require("../database/knex.js");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.static(path.join(__dirname, "../public/")));

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// ROUTES

// GET retrieve all projects
app.get("/projects", (req, res) => {
  knex
    .select()
    .from("projects")
    .then(listOfProjects => {
      return listOfProjects;
    })
    .then(listOfProjects => {
      res.status(200).json(listOfProjects);
    })
    .catch(err => {
      console.log("Error retrieving objects from server route /projects");
      res.status(404).send("Error retrieving projects");
    });
});
// GET retrieve one project
app.get("/projects/:id", (req, res) => {
  knex
    .select()
    .where({ id: req.params.id })
    .from("projects")
    .then(dbResult => {
      console.log("HELLO PROJECTS", dbResult);
      res.status(200);
      res.json(dbResult[0]);
    })
    .catch(err => {
      console.log("Error retrieving specific project in project view server");
      res.status(500).end();
    });
});

module.exports = app;
