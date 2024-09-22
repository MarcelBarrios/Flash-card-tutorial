import data from './data.js'

console.log(data.questions)

const titleH1 = document.querySelector('#title');
const descriptionP = document.querySelector('#description');
const scoreP = document.querySelector('#score');
const questionContainer = document.querySelector('#flip-card');
const qCardP = document.querySelector('#q-card > p');
const aCardP = document.querySelector('#a-card > p');
const questions = data.questions;

descriptionP.innerHTML = data.description;

console.log(titleH1)

titleH1.innerHTML = data.title;

let questionIndex = -1

const showNextQuestion = () => {
    questionIndex += 1
    questionIndex = questionIndex % (questions.length - 1)
    qCardP.innerHTML = questions[questionIndex].q
    aCardP.innerHTML = questions[questionIndex].a
  
    scoreP.innerHTML = `Score ${questionIndex + 1}/${questions.length - 1}`
  }
  
// showNextQuestion() // Run the function!

document.body.addEventListener('click', e => {
    console.log(e)
    if (e.target.matches('#answer-button')) {
      questionContainer.classList.add('flip')
    } else if (e.target.matches('#question-button')) {
      questionContainer.classList.remove('flip')
    } else if (e.target.matches('#next-button')) {
      questionContainer.classList.remove('flip')
      showNextQuestion()
    }
})

showNextQuestion();