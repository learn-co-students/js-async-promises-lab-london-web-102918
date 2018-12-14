const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
  const div_qc = document.querySelector("div.question-container");
  div_qc.innerHTML = question.questionText;
};

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);
  return new Promise(() => {
    setTimeout(() => {
      resolve(question)
    }, time)
  });
};

function removeQuestion() {
  const div_qc = document.querySelector("div.question-container");
  return new Promise(() => {
  div_qc.innerHTML = ''
  });
};

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion);
};

function trueAndFalseButtons() {

  // return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
  return document.querySelectorAll("div.btn");

};

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach((btn) => btn.classList.toggle("hide"))
};

function displayQuestionOnClick() {
  let btn = document.querySelector('a');
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}
