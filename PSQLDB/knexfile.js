require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DEV_URL,
      port: process.env.DEV_PG_DBPORT,
      database: process.env.DEV_DBNAME,
      user: process.env.DEV_USERNAME,
      password: process.env.DEV_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "projects"
    }
  },

  staging: {
    client: "pg",
    connection: {
      host: process.env.DEV_URL,
      database: process.env.DEV_DBNAME,
      user: process.env.DEV_USERNAME,
      password: process.env.DEV_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "projects"
    }
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.DEV_URL,
      port: process.env.DEV_PG_DBPORT,
      database: process.env.DEV_DBNAME,
      user: process.env.DEV_USERNAME,
      password: process.env.DEV_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "projects"
    }
  }
};
