const options = require("./knexfile");
const knex = require("knex")(options[process.env.DBOPTIONS || "development"]);

const insert = (data, cb) => {
  const {
    project_name,
    creator_name,
    creator_image,
    blurb,
    thumbnail,
    full_image,
    location,
    catagory,
    description
  } = data;

  knex("projects")
    .insert({
      project_name: project_name,
      creator_name: creator_name,
      creator_image: creator_image,
      blurb: blurb,
      thumbnail: thumbnail,
      full_image: full_image,
      location: location,
      catagory: catagory,
      description: description
    })
    .count("project_name")
    .then(data => cb(data))
    .catch(err => cb(err));
};

module.exports = { knex, insert };

// table.increments("id").primary();
// table.string("project_name").notNullable();
// table.string("creator_name").notNullable();
// table.string("creator_imgage").notNullable();
// table.string("blurb").notNullable(); // this doesn't sound good, think about changing the col name...
// table.string("thumbnail").notNullable();
// table.string("full_image").notNullable();
// table.string("location").notNullable();
// table.string("catagory").notNullable();
// table.string("created_at").notNullable();
// table.string("description").notNullable();
