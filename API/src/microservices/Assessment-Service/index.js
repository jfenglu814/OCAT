const Assessment = require("../Database/assessment");
const bookshelf = require("../Database/bookshelf");

//TODO: update created_at, convert Date to prostgreSQL date object

//assessment object
let assessment = {};

//formats data for database and calculates the assessment score and risk levels
function prepareData(data) {
  assessment = {
    name: data.name,
    instrument: data.instrument,
    altercations: parseInt(data.altercations),
    previousContact: parseInt(data.previousContact),
    ownerAltercation: parseInt(data.ownerAltercation),
    playWellDogs: parseInt(data.playWellDogs),
    hissesStrangers: parseInt(data.hissesStrangers),
    birthday: data.birthday,
  };
  calculateScore(assessment);
  calculateRiskLevel(assessment);
}

//calculates assessment score
function calculateScore(assessmentData) {
  //destructure assessment property values
  const {
    altercations,
    previousContact,
    ownerAltercation,
    playWellDogs,
    hissesStrangers,
  } = assessment;
  const score =
    altercations +
    previousContact +
    ownerAltercation +
    playWellDogs +
    hissesStrangers;
  assessment.score = score;
}

//calculates risk levels
function calculateRiskLevel(AssessmentData) {
  let riskLevel = "";
  const { score } = assessment;

  if (score <= 1) riskLevel = "low";
  else if (score > 1 && score < 4) riskLevel = "medium";
  else riskLevel = "high";

  assessment.riskLevel = riskLevel;
}

//constructs and formats assessment object
//Insert data into database
async function passAssessment(data) {
  //calculates risk score and assessment
  prepareData(data);
  console.log("Microservices DATA", assessment);

  //sends data into database
  savedAssessment = await newAssessment();
  console.log(savedAssessment);

  return savedAssessment;
}

//inserts row into database
function newAssessment() {
  return Assessment.forge({
    cat_name: assessment.name,
    cat_date_of_birth: assessment.birthday,
    instrument: assessment.instrument,
    score: assessment.score,
    risk_level: assessment.riskLevel,
  }).save();
}
function getAllAssessment(data) {}

/*try {
    const newAssessment = await new Assessment({
      cat_name: assessment.name,
      //cat_date_of_birth: assessment.birthday,
      instrument: assessment.instrument,
      score: assessment.score,
      risk_level: assessment.riskLevel,
    }).save();
  } catch (err) {
    console.log(err);
  }*/

module.exports = { passAssessment, getAllAssessment };
