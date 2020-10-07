const bookshelf = require("./bookshelf");

const Assessment = bookshelf.Model.extend({
  tableName: "assessments",
  timeStamps: true,
});

module.exports = Assessment;
