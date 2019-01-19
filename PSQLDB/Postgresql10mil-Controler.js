const options = require("./knexfile");
const knex = require("knex")(options[process.env.DBOPTIONS || "development"]);

const insert = function(data) {
  console.log("DATABASE HAS THE DATA");
  knex.batchInsert("projects", data).catch(err => err);
};

module.exports = { knex, insert };
