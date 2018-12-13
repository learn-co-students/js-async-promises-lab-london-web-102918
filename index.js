const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
  document.getElementById('question-container').innerText = question.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  let promise =  new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve()
    },time)
})
  return promise
}

function removeQuestion() {
  document.getElementById('question-container').innerText = ''
}

function trueAndFalseButtons() {
  let btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
  return btns
}
function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle("hide")
})
}

function displayQuestionOnClick() {
  let ask = document.querySelector('a')
  let btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
  ask.addEventListener('click', () => { 
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}
function askQuestionThenRemoveQuestion(time) {
  question = questions[0]
  appendQuestion(question)
  let promise = new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve(removeQuestion)
    },time)
  })
  return promise
}
