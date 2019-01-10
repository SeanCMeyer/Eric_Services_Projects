require("dotenv").config();
const { MDB_URL, MDB_USERNAME, MDB_PASS, MDB_DBNAME } = process.env;

var knex = require("knex")({
  client: "mysql",
  connection: {
    host: MDB_URL,
    user: MDB_USERNAME,
    password: MDB_PASS,
    database: MDB_DBNAME
  }
});

const insert = data => {
  knex("projects")
    .returning("id")
    .insert({
      project_name: "Petsy",
      creator_name: "Sean",
      creator_Image: "www.nothanks.com/org/hardpass",
      blurb: "this is odd",
      thumbnail: "hahano.com",
      full_image: "nope",
      location: "super stition springs",
      catagory: "awesomeness",
      description: "not that great actually"
    });
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
