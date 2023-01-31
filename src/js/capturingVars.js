const capturingRadiosSelected = () => document.querySelectorAll('input[type="radio"][name="answer"]')

const capturingButtons = () => ({
  buttonNext: document.getElementById('buttonNext'),
  buttonBack: document.getElementById('buttonBack')
})

const containerQuestion = document.getElementById('containerQuestion')
const capturingStrat = () => document.getElementById('start')

export { capturingRadiosSelected, containerQuestion, capturingStrat, capturingButtons }
