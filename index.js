const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let btns = document.querySelector('.true-false-list').querySelectorAll('.btn')

const questionContainer = document.querySelector('.question-container')

function appendQuestion (question) {
  const qText = question['questionText']
  questionContainer.innerHTML = qText
}

function askQuestionThen (time) {
  question = questions[0]
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve()
    }, time)
  })
}

function removeQuestion () {
  questionContainer.innerHTML = ''
}

function askQuestionThenRemoveQuestion (time) {
  const qText = question['questionText']
  questionContainer.innerHTML = qText
  return new Promise(() => {
    setTimeout(function () {}, time)
  })
}


function trueAndFalseButtons () {
  return btns
}

function toggleTrueAndFalseButtons () {
  if (btns.style.display) {}
}
