const bookshelf = require("./bookshelf");
bookshelf.plugin(require('bookshelf-soft-delete'));

const Assessment = bookshelf.Model.extend({
  tableName: "assessments",
  //timeStamps: true,
  soft: ["deleted_at"],
});

module.exports = Assessment;
