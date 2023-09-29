const input = require('readline-sync');

// 1.1a: Define candidateName // 
// 1.2a: Define question, correctAnswer, and candidateAnswer //
let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

// Variables for Part 2
let questions = [
"Who was the first American woman in space? ",
"True or false: 5 kilometer == 5000 meters? ",
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? "
];
let correctAnswers = [
"Sally Ride",
"true",
"40",
"Trajectory",
"3"
];
let candidateAnswers = [];

function askForName() {
// 1.1b: Ask for candidate's name //
  candidateName = input.question("Candidate Name: ");

  return candidateName;
}

function askQuestions() {
  // 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // 2: modify your quiz app to ask 5 questions //
  for (qNum = 0; qNum < questions.length; qNum++) {
    candidateAnswers.push(input.question(questions[qNum]));
  }
}

function gradeQuiz(candidateAnswers) {
  // 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // 3.2 use this variable to calculate the candidates score.
  let grade = 0;
  let numberCorrect = 0;

  for (qNum = 0; qNum < questions.length; qNum++) {
    let right = "> CORRECT";
    let wrong = "> INCORRECT";
    let isCorrect;
    if (candidateAnswers[qNum].toLowerCase() === correctAnswers[qNum].toLowerCase()) { 
      isCorrect = right; 
      numberCorrect++;
    } else isCorrect = wrong;
    console.log(`\n${qNum+1}) ${questions[qNum]}\nYour Answer: ${candidateAnswers[qNum]} ${isCorrect}\nCorrect Answer: ${correctAnswers[qNum]}`);
  }

  
  grade = (numberCorrect / correctAnswers.length) * 100;
  let passedMsg;
  let passed;
  if (grade < 80) { passed = false; } else true;
  let correctMsg = `(${numberCorrect} of ${correctAnswers.length} responses correct)`
  if (passed) {
    passedMsg = "PASSED";
  } else passedMsg = "FAILED";
  console.log(`\n>>> Overall Grade: ${grade}% ${correctMsg} <<<\n>>> Status: ${passedMsg} <<<`)

  return grade;
}

function runProgram() {
  askForName();
  // 1.1c: Greet candidate using their name //
  console.log(`Hello ${candidateName}`);
  askQuestions();
  console.log(`\n\nCandidate Name: ${candidateName}`);
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};