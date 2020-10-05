//const { database } = require("../../../config.example.json");

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "risk",
  },
});

module.exports = require("bookshelf")(knex);
