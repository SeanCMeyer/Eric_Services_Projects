require("dotenv").config();

console.log(process.env);

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: MDB_URL,
      database: MDB_DBNAME,
      user: MDB_USERNAME,
      password: MDB_PASS
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
    client: "mysql",
    connection: {
      host: MDB_URL,
      database: MDB_DBNAME,
      user: MDB_USERNAME,
      password: MDB_PASS
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
    client: "mysql",
    connection: {
      host: MDB_URL,
      database: MDB_DBNAME,
      user: MDB_USERNAME,
      password: MDB_PASS
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
