const stepsContainer = document.querySelector(".step_container")

const titleContainer = document.getElementById("step_title")
const numberContainer = document.getElementById("step_number")

const previousStepButton = document.getElementById("previous_step")
const nextStepButton = document.getElementById("next_step")
const startButton = document.getElementById("start_button")
const openButton = document.getElementById("open_button")

const stepOne = document.querySelector(".selector_container")
const stepTwo = document.querySelector(".budget_container")
const stepThree = document.getElementById("pdf_container")

const stepFourContainer = document.querySelector(".step_4")
const stepButtonsContainer = document.querySelector(".step_button_container")

const titles = [
  "Color Selection",
  "Budget Generator",
  "Generate PDF",
  "Hold click to move"
]

const elements = [
  stepOne,
  stepTwo,
  stepThree
]

let step = 1
let prevStep
let stepTitle = "Color Selection"

const previousStep = () => {
  prevStep = step
  step = step - 1
  handleStep()
}

const nextStep = () => {
  prevStep = step
  step = step + 1
  handleStep()
}

const handleStep = () => {
  stepTitle = titles[step - 1]
  console.log(step)
  console.log(stepTitle)

  if(step === 1) {
    previousStepButton.classList.add("hidden")
  } else if (step === titles.length) {
    nextStepButton.classList.add("delete")
    startButton.classList.remove("delete")
    stepFourContainer.classList.remove("delete")
    stepButtonsContainer.classList.add("step_4_buttons")
  } else {
    previousStepButton.classList.remove("hidden")
    nextStepButton.classList.remove("delete")
    startButton.classList.add("delete")
    stepFourContainer.classList.add("delete")
    stepButtonsContainer.classList.remove("step_4_buttons")
  }

  titleContainer.innerHTML = `${stepTitle}`
  numberContainer.innerHTML = `${step}`

  elementAnimate()
}

const reset = () => {
  stepsContainer.classList.remove("delete")

  step = 1
  prevStep
  stepTitle = "Color Selection"

  previousStepButton.classList.remove("hidden")
  nextStepButton.classList.remove("delete")
  startButton.classList.add("delete")
  stepFourContainer.classList.add("delete")
  stepButtonsContainer.classList.remove("step_4_buttons")
}

const closeStep = () => {
  stepsContainer.classList.add("delete")

  elements.forEach(element => {
    element.classList.remove("highlight")
  })
}

const openStep = () => {
  reset()

  handleStep()

  elementAnimate()
}

const elementAnimate = () => {
  let prevElement = elements[prevStep - 1]
  let element = elements[step - 1]

  console.log(element)

  prevElement?.classList.remove("highlight")
  element?.classList.add("highlight")
  // prevElement?.animate([
  //   { zIndex: 10 },
  //   { zIndex: 0 }
  // ], {
  //   duration: 100,
  //   fill: 'forwards'
  // })

  // element?.animate([
  //   { zIndex: 0 },
  //   { zIndex: 100}
  // ], {
  //   duration: 100,
  //   delay: 100,
  //   fill: 'forwards'
  // })
}

elementAnimate()
previousStepButton.addEventListener("click", previousStep)
nextStepButton.addEventListener("click", nextStep)
startButton.addEventListener("click", closeStep)
openButton.addEventListener("click", openStep)