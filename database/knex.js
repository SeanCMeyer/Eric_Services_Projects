const dotenv = require('dotenv');
const result = dotenv.config();
const pg = require('pg');

const knex = require('knex')({
  client: 'pg',
  // connection: { 
  //   user: 'student', 
  //   host: process.env.PSQL_HOST,
  //   password: 'student', 
  //   database: 'projects' 
  // }
  connection: {
    user : result.PSQL_USER,
    host : result.PSQL_HOST,
    password : 'student',
    database : 'projects'
  }
});

module.exports = knex; 