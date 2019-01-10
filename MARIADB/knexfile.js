require("dotenv").config();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      filename: "./Maria10mil-Controler.js"
    }
  },

  staging: {
    client: "mysql",
    connection: {
      database: process.env.MDB_NAME,
      user: process.env.MDB_USERNAME,
      password: process.env.PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "mysql",
    connection: {
      database: process.env.MDB_NAME,
      user: process.env.MDB_USERNAME,
      password: process.env.PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
