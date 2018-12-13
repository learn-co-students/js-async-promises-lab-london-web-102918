const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

let ask = document.querySelector('a')
let buttons = document.querySelector('.true-false-list').querySelectorAll('.btn')
const container = document.querySelector('.question-container')

function appendQuestion(question) {
  const questionT = question['questionText']
  container.innerText = questionT
}

function askQuestionThen(time) {
  question = questions[0]
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve()
    }, time)
  })
}

function removeQuestion() {
  container.innerText = ''
}

function askQuestionThenRemoveQuestion(time) {
  const questionT = question['questionText']
  container.innerText = questionT

  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve()
    }, time)
  })
.then(response => container.innerText = '')
}

function trueAndFalseButtons() {
  return buttons
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(buttons){
    buttons.classList.toggle('hide')
  })
}

function displayQuestionOnClick() {
  ask.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}