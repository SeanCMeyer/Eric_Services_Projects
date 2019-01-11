const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const db = require("../PSQLDB/Postgresql10mil-Controler");
require("dotenv").config();
const port = process.env.PORT || process.env.DEV_PORT || 3005;

const app = express();

app.use(express.static(path.join(__dirname, "../public/")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.post("api/projects/maria", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Projects API With MARIADB listening on port: ${port}`);
});
