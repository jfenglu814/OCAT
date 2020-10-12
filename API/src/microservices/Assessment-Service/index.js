const Assessment = require("../Database/assessment");

//formats data for database and calculates the assessment score and risk levels
function prepareData(data) {
  const assessment = {
    name: data.name,
    instrument: data.instrument,
    altercations: parseInt(data.altercations),
    previousContact: parseInt(data.previousContact),
    ownerAltercation: parseInt(data.ownerAltercation),
    playWellDogs: parseInt(data.playWellDogs),
    hissesStrangers: parseInt(data.hissesStrangers),
    birthday: data.birthday,
  };
  assessment.score = calculateScore(assessment);
  assessment.riskLevel = calculateRiskLevel(assessment);

  return assessment;
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
  } = assessmentData;
  const score =
    altercations +
    previousContact +
    ownerAltercation +
    playWellDogs +
    hissesStrangers;
  return score;
}

//calculates risk levels
function calculateRiskLevel(assessmentData) {
  let riskLevel = "";
  const { score } = assessmentData;

  if (score <= 1) riskLevel = "low";
  else if (score > 1 && score < 4) riskLevel = "medium";
  else riskLevel = "high";

  return riskLevel;
}

//constructs and formats assessment object
//Insert data into database
async function passAssessment(data) {
  //calculates risk score and assessment
  const assessment = prepareData(data);
  console.log("Microservices DATA", assessment);

  //sends data into database
  savedAssessment = await newAssessment(assessment);
  console.log(savedAssessment);

  return savedAssessment;
}

//inserts row into database
function newAssessment(assessment) {
  return Assessment.forge({
    cat_name: assessment.name,
    cat_date_of_birth: assessment.birthday,
    instrument: assessment.instrument,
    score: assessment.score,
    risk_level: assessment.riskLevel,
  }).save();
}

//get assessment data
async function getAllAssessments() {
  let assessments = await Assessment.fetchAll();
  console.log(assessments.toJSON());
  return assessments.toJSON();
}

module.exports = { passAssessment, getAllAssessments };
