const createQuestionWord = (numberQuestion, id, content, references) => {
  const tag = document.createElement('h2')
  const child = document.createTextNode(`${numberQuestion} ${content}`)
  tag.setAttribute('class', 'content-question')
  tag.setAttribute('id', id)
  tag.appendChild(child)
  references.appendChild(tag)
}

const createAnswer = (id, content, references) => {
  const tag = document.createElement('div')
  tag.setAttribute('class', 'relative-answer')
  const inputChild = document.createElement('input')
  inputChild.setAttribute('name', 'answer')
  inputChild.setAttribute('type', 'radio')
  inputChild.setAttribute('class', 'main-content-answer')
  inputChild.setAttribute('id', id)
  const labelChild = document.createElement('label')
  labelChild.setAttribute('for', id)
  labelChild.setAttribute('class', 'container-answer')
  const contentText = document.createTextNode(content)
  labelChild.appendChild(contentText)
  tag.appendChild(inputChild)
  tag.appendChild(labelChild)
  references.appendChild(tag)
}

const createButtons = (references) => {
  const tag = document.createElement('div')
  tag.setAttribute('class', 'content-buttons d-flex align-items-center justify-content-center')

  const buttonTextBack = document.createTextNode('Volver')
  const buttonGoBack = document.createElement('button')
  buttonGoBack.setAttribute('class', 'button go-back')
  buttonGoBack.setAttribute('id', 'buttonBack')
  buttonGoBack.appendChild(buttonTextBack)

  const buttonTextNext = document.createTextNode('Siguiente')
  const buttonGoNext = document.createElement('button')
  buttonGoNext.setAttribute('class', 'button go-next')
  buttonGoNext.setAttribute('id', 'buttonNext')
  buttonGoNext.appendChild(buttonTextNext)

  tag.appendChild(buttonGoBack)
  tag.appendChild(buttonGoNext)

  references.appendChild(tag)
}

// Crear un articulo o seccion de la parte de resultados
const createArticleResult = (content, text) => {
  const article = document.createElement('article')
  article.setAttribute('class', 'result-question')

  const h3 = document.createElement('h3')
  h3.setAttribute('class', 'number-question')
  const numberQuestion = document.createTextNode(content)
  h3.appendChild(numberQuestion)

  const h3Question = document.createElement('h3')
  const textChild = document.createTextNode(text)
  h3Question.appendChild(textChild)

  article.appendChild(h3Question)
  article.appendChild(h3)

  return article
}

const createRestart = () => {
  const div = document.createElement('div')
  div.setAttribute('class', 'content-buttons d-flex align-items-center justify-content-center')

  const buttonRestart = document.createElement('button')
  buttonRestart.setAttribute('class', 'button')
  buttonRestart.setAttribute('id', 'start')
  const textButton = document.createTextNode('Reiniciar')
  buttonRestart.appendChild(textButton)
  div.appendChild(buttonRestart)
  return div
}

// Generar los resultados
const createResults = (arrResults, reference) => {
  const tag = document.createElement('div')
  tag.setAttribute('class', 'content-result')

  arrResults.forEach(element => {
    const article = createArticleResult(element.content, element.text)
    tag.appendChild(article)
  })

  const buttonRestart = createRestart()
  tag.appendChild(buttonRestart)

  reference.appendChild(tag)
}

export { createQuestionWord, createAnswer, createButtons, createResults }
