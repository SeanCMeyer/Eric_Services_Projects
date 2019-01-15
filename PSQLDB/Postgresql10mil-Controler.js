const options = require("./knexfile");
const knex = require("knex")(options[process.env.DBOPTIONS || "development"]);

const insert = async function(data, Promise) {
  await knex("projects")
    .insert(data)
    .then(() => response => response)
    .catch(err => err);
};

// const countColumn = async function(data) {};

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
