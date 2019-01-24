const options = require("./knexfile");
const knex = require("knex")(options[process.env.DBOPTIONS || "development"]);

const insert = function(data) {
  knex.batchInsert("projects", data).catch(err => err);
};

const getProjectList = ID => {
  let maxid = eval(ID + "+ 5");
  return knex("projects").whereBetween("id", [ID, maxid]);
};

const addIDColumnToTable = () => {
  knex.schema
    .alterTable("projects", function(table) {
      table.increments("id");
    })
    .catch(err => console.log("don't panic, it's not GO", err));
};

module.exports = { knex, insert, getProjectList, addIDColumnToTable };
