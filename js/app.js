//Getting the DOM elements
const startBtn = document.querySelector(".btn-start");
const heading = document.querySelector(".heading");
const card = document.querySelector(".quiz-card");
const opt1 = document.querySelector(".btn-opt-1");
const opt2 = document.querySelector(".btn-opt-2");
const opt3 = document.querySelector(".btn-opt-3");
const opt4 = document.querySelector(".btn-opt-4");
const question = document.querySelector(".quiz-question");
const right = document.querySelector(".right");
const wrong = document.querySelector(".wrong");
const allOptBtn = document.querySelectorAll(".btn-opt");

const results = document.querySelector(".results");
const score = document.querySelector(".score");
const noOfCorrectAns = document.querySelector(".noOfCorrectAns");
const noOfWrongAns = document.querySelector(".noOfWrongAns");
const btnReplay = document.querySelector(".btn-replay");
const btnHome = document.querySelector(".btn-home");
//Quiz Data
const quizQuestions = [
  {
    question: "What does HTML stand for?",
    opt1: "Hyper Trainer Marking Language",
    opt2: "Hyper Text Marketing Language",
    opt3: "Hyper Text Markup Language",
    opt4: "Hyper Text Markup Leveler",
    answer: "Hyper Text Markup Language",
  },
  {
    question:
      "Which of the following is the correct way to use the standard namespace in C++?",
    opt1: "Using namespace std;",
    opt2: "Using namespace standard;",
    opt3: "Using standard namespace;",
    opt4: "hshs",
    answer: "Standard namespace used;",
  },
  {
    question: "What does CSS stands for?",
    opt1: "Cascading Style Sheets",
    opt2: "Creative Style Sheets",
    opt3: "Canvas Style Sheets",
    opt4: "Centralized Style Sheets",
    answer: "Cascading Style Sheets",
  },
  {
    question: "In which year was JavaScript developed?",
    opt1: "1985",
    opt2: "1987",
    opt3: "1995",
    opt4: "2001",
    answer: "1995",
  },
];
let currentQuestion = 0;
let correctAns = 0;
let wrongAns = 0;
let currentlyAskedQuestion = quizQuestions[currentQuestion];
//functions
function reset() {
  //States
  currentQuestion = 0;
  correctAns = 0;
  wrongAns = 0;
  currentlyAskedQuestion = quizQuestions[currentQuestion];
}

function loadingQuestions() {
  currentlyAskedQuestion = quizQuestions[currentQuestion];
  question.textContent = currentlyAskedQuestion.question;
  opt1.textContent = currentlyAskedQuestion.opt1;
  opt2.textContent = currentlyAskedQuestion.opt2;
  opt3.textContent = currentlyAskedQuestion.opt3;
  opt4.textContent = currentlyAskedQuestion.opt4;
}
//Event listeners
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  heading.style.display = "none";
  card.style.display = "flex";
  loadingQuestions();
});
btnHome.addEventListener("click", () => {
  startBtn.style.display = "block";
  heading.style.display = "block";
  results.style.display = "none";
  reset();
});
btnReplay.addEventListener("click", () => {
  results.style.display = "none";
  card.style.display = "flex";
  reset();
  loadingQuestions();
});
for (btn of allOptBtn) {
  btn.addEventListener("click", (e) => {
    if (currentQuestion < quizQuestions.length - 1) {
      if (e.currentTarget.innerText === currentlyAskedQuestion.answer) {
        correctAns++;
      } else {
        wrongAns++;
      }
      currentQuestion++;
      loadingQuestions();
    } else {
      if (e.currentTarget.innerText === currentlyAskedQuestion.answer) {
        correctAns++;
      } else {
        wrongAns++;
      }
      card.style.display = "none";
      results.style.display = "flex";
      noOfCorrectAns.textContent = correctAns;
      noOfWrongAns.textContent = wrongAns;
    }
  });
}
