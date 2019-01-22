mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/myapp",
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
  project_name: String,
  creator_name: String,
  creator_image: String,
  blurb: String,
  thumbnail: String,
  full_image: String,
  location: String,
  catagory: String,
  description: String
});

const Project = mongoose.model("Project", ProjectSchema);

const insertion = data =>
  Project.insertMany(data).catch(err => console.log(err));

module.exports = { mongoose, insertion };
