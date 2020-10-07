const { config } = require(`../../utils`);

const knex = require("knex")(config.database);

module.exports = require("bookshelf")(knex);
