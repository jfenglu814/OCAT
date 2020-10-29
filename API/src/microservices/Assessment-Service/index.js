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
  //Add up each individual element to calculate score
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

  //sends data into database
  savedAssessment = await newAssessment(assessment);

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
  return assessments.toJSON();
}

async function deleteAssessment(id){
  //creates timestamp of deletion
  const time = new Date().toISOString();

  //updates database
  assessment = await Assessment.forge({
    id: id,
    deleted_at: time,
  }, "update").save();
  
}

module.exports = { passAssessment, getAllAssessments, deleteAssessment };
