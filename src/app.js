import { radiosSelected } from './capturingVars.js'

const whatIsCheck = (radiosForSchear) => {
  for (const element of radiosSelected) {
    if (element.checked) {
      return element
    }
  }
}

fetch('./questions.json')
  .then(response => response.json())
  .then(data => console.log(data))
