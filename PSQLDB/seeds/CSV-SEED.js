const fs = require("fs");
const reader = fs.createReadStream("./../CSV-SEED/mockData.csv");

exports.seed = function(knex, Promise) {
  Promise.all([
    knex("table_name")
      .del()
      .then(() => knex.raw("ALTER TABLE projects AUTO_INCREMENT = 1"))
      .then(() => console.log("Deleted projects table, reset auto increment"))
      .then(() => console.log("ready to batch insert CSV file!!"))
      .catch(err => console.log("error in DB!! ", err)),
    knex("projects").batchInsert([reader.pipe()])
  ]);
};
