const fs = require(`fs`);

const CONFIG_FILE_PATH = `${__dirname}/../../../config.json`;
let config = {};
let server = {};

if (fs.existsSync(CONFIG_FILE_PATH)) {
  config = JSON.parse(fs.readFileSync(CONFIG_FILE_PATH, `utf8`));

  server = config.server;
}

module.exports = {
  server: {
    port: server.port || 3000,
    "ims-application": server[`ims-application`] || ``,
  },
  database: {
    client: config.database.client,
    connection: {
      host: process.env.DATABASE_HOST || config.database.connection.host,
      port: process.env.DATABASE_PORT || config.database.connection.port,
      user: process.env.DATABASE_USERNAME || config.database.connection.user,
      password:
        process.env.DATABASE_PASSWORD || config.database.connection.password,
      database:
        process.env.DATABASE_NAME || config.database.connection.database,
    },
  },
};
