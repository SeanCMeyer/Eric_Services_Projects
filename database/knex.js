require('dotenv').config();
const pg = require('pg');

const db = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.PSQL_HOST,
    user : process.env.PSQL_USER,
    password : process.env.PSQL_PASSWORD,
    database : 'projects'
  }
});

module.exports = db; 