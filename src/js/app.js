import { capturingRadiosSelected, containerQuestion, capturingStrat, capturingButtons } from '../js/capturingVars.js'
import { createQuestionWord, createAnswer, createButtons, createResults } from '../js/createElements.js'

let countQuestion = 0
let dataJson
const lastAnswers = []
const currentAnswer = {
  correctAnswers: 0,
  totalQuestions: 0
}

// Genera la primera pregunta
const startQuiz = () => {
  currentAnswer.correctAnswers = 0
  currentAnswer.totalQuestions = 0
  countQuestion = 0
  const question = shuffleAnswers(dataJson)
  generateQuestionComplete(question)
}

// Verifica que check está seleccionado
const whatIsCheck = (radiosForSchear) => {
  for (const element of radiosForSchear) {
    if (element.checked) {
      return element
    }
  }
}

// Comparo el valor del check seleccionado con mi json
const validateAnswer = (answers) => {
  const result = whatIsCheck(capturingRadiosSelected())
  if (!result) return null
  const idCheck = Number(result.id)
  const answerSelect = answers.find(element => element.id === idCheck)
  if (answerSelect.isCorrect === true) return true
  return false
}

const generateResultQuestion = () => {
  clearContainerQuestion()
  const { correctAnswers, totalQuestions } = currentAnswer
  const arrResults = [
    {
      content: totalQuestions,
      text: 'Total de preguntas: '
    },
    {
      content: correctAnswers,
      text: 'Respuestas correctas: '
    },
    {
      content: totalQuestions - correctAnswers,
      text: 'Respuestas Incorrectas: '
    }
  ]
  createResults(arrResults, containerQuestion)
}

// Botón del inicio ejecuta el inicio del juego
const preparingQuiz = () => {
  capturingStrat().addEventListener('click', () => {
    startQuiz()
  })
}

preparingQuiz()

// Funcion que ejecuta el botón de siguiente
const functionGoNext = () => {
  const { answers } = dataJson[countQuestion]
  const resultQuestion = validateAnswer(answers)
  if (resultQuestion === null) return
  currentAnswer.totalQuestions++
  if (resultQuestion) currentAnswer.correctAnswers++
  lastAnswers.push(resultQuestion)
  countQuestion++
  const currentQuestion = dataJson[countQuestion]
  if (currentQuestion) {
    const questionNext = shuffleAnswers(dataJson)
    generateQuestionComplete(questionNext)
  } else {
    generateResultQuestion()
    preparingQuiz()
  }
}

// funcion que ejecuta el botón de volver
const functionGoBack = () => {
  currentAnswer.totalQuestions--
  const theLastAnswer = lastAnswers.pop()
  if (theLastAnswer) currentAnswer.correctAnswers--
  countQuestion--
  const currentQuestion = dataJson[countQuestion]
  generateQuestionComplete(currentQuestion)
}

// Implemento las funciones que van a tener los botones de siguiente y volver
const generateFunctionsButtons = () => {
  const { buttonBack, buttonNext } = capturingButtons()
  buttonNext.onclick = () => functionGoNext()
  if (countQuestion > 0) buttonBack.onclick = () => functionGoBack()
}

// Limpia el espacio de trabajo
const clearContainerQuestion = () => {
  containerQuestion.innerHTML = ''
}

// Crea la pregunta, con su titulo y sus respectivas respuestas pasando como argumento una question del json
const generateQuestionComplete = (questionJson) => {
  clearContainerQuestion()
  const { id, titleQuestion, answers } = questionJson
  createQuestionWord(countQuestion + 1, id, titleQuestion, containerQuestion)
  answers.forEach(({ id, text }) => {
    createAnswer(id, text, containerQuestion)
  })
  createButtons(containerQuestion)
  generateFunctionsButtons()
}

// Coloca las respuestas en un orden aleatorio
const shuffleAnswers = (data) => {
  const { answers } = data[countQuestion]
  answers.sort(() => Math.random() - 0.5)
  return {
    ...data[countQuestion],
    answers
  }
}

// Obtención de datos del json
fetch('./questions.json')
  .then(response => response.json())
  .then(data => {
    dataJson = data
  })
