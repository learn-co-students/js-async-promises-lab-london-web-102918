const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
let btns = document.querySelector('.true-false-list').querySelectorAll('.btn')

let questionContainer = document.querySelector('.question-container')

 const appendQuestion = (question) => {
   questionContainer.innerHTML = question.questionText.trim()
 }

const askQuestionThen = (time) => {
  question = questions[0]
  return new Promise((resolve, reject) => {
          setTimeout(function() {
            appendQuestion()
            resolve(question)
          }, time )
      })
  }

const removeQuestion = () => {
  questionContainer.innerHTML = '';
}

const askQuestionThenRemoveQuestion = (time) => {
  const questionT = question['questionText']
   questionContainer.innerText = questionT

   question = questions[0]
   return new Promise(() => {
     setTimeout(function(){
     }, time)
   })
   .then(response => questionContainer.innerText = '')
}

const trueAndFalseButtons = () => {
return btns
}

const toggleTrueAndFalseButtons = () => {
  trueAndFalseButtons().forEach(function(btn) {
  btn.classList.toggle('hide')
})
}

const displayQuestionOnClick = (time) => {
  return askQuestionThen(time).then(removeQuestion)
}
