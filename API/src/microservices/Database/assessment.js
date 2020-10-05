//const { model } = require("./bookshelf");
const bookshelf = require("./bookshelf");

const Assessment = bookshelf.Model.extend({
  tableName: "assessments",
  timeStamps: true,
});

module.exports = Assessment;
/*
module.export = bookshelf.model("Assessment", {
  tableName: "assessments",
  timeStamps: true,
});
*/
