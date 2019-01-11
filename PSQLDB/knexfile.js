require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5433,
      database: "better_jump_10mil",
      user: "master",
      password: "passofdoom"
    },
    migrations: {
      directory: "./migrations",
      tableName: "migrations"
    }
  },

  staging: {
    client: "pg",
    connection: {
      host: process.env.DEV_URL,
      port: 5433,
      database: process.env.DEV_DBNAME,
      user: process.env.DEV_USERNAME,
      password: process.env.DEV_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations",
      tableName: "migrations"
    }
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.DEV_URL,
      port: 5433,
      database: process.env.DEV_DBNAME,
      user: process.env.DEV_USERNAME,
      password: process.env.DEV_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations",
      tableName: "migrations"
    }
  }
};
