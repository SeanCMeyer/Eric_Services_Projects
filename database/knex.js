const dotenv = require('dotenv');
const result = dotenv.config();

const knex = require('knex')({
  client: 'pg',
  connection: {
    user : result.PSQL_USER,
    host : result.PSQL_HOST,
    password : 'student',
    database : 'projects'
  }
});

module.exports = knex; 