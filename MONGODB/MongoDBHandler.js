require("dotenv").config({ path: __dirname + "/../../.env" });
const { MG_URI, MG_PORT, MG_DB, MG_USERNAME, MG_PASSWORD } = process.env;

mongoose = require("mongoose");

mongoose.connect(
  `mongodb://${MG_URI}:${MG_PORT}/${MG_DB}`,
  { useNewUrlParser: true }
);

db = mongoose.connection;

db.on("error", () => console.error("connection error boss"));
db.on("connected", () => console.log("connected to DB boss!"));
mongoose.connection.on("disconnected", function() {
  mongoose.connection.close(function() {
    console.log("done with this DB, bye now");
    process.exit(0);
  });
});

const ProjectSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  project_name: String,
  creator_name: String,
  blurb: String,
  full_image: String,
  location: String,
  catagory: String
});

const Project = mongoose.model("Project", ProjectSchema);

const insertion = data =>
  Project.insertMany(data).catch(err => console.log(err));

const getProjectList = ID => {
  max = eval(ID + "+ 5");
  Project.find({})
    .where("project_name")
    .gte(ID)
    .lte(max);
};

module.exports = { mongoose, insertion, getProjectList };
