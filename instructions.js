const stepsContainer = document.querySelector(".step_container")

const titleContainer = document.getElementById("step_title")
const numberContainer = document.getElementById("step_number")

const previousStepButton = document.getElementById("previous_step")
const nextStepButton = document.getElementById("next_step")
const closeButton = document.getElementById("close_button")

const stepOne = document.querySelector(".selector_container")
const stepTwo = document.querySelector(".budget_container")
const stepThree = document.querySelector(".pdf_container")

const titles = [
  "Color Selection",
  "Budget Generator",
  "Generate PDF"
]

const elements = [
  stepOne,
  stepTwo,
  stepThree
]

let step = 1
let stepTitle = "Color Selection"

const previousStep = () => {
  step = step - 1
  handleStep()
}

const nextStep = () => {
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
    nextStepButton.classList.add("hidden")
  } else {
    previousStepButton.classList.remove("hidden")
    nextStepButton.classList.remove("hidden")
  }

  titleContainer.innerHTML = `${stepTitle}`
  numberContainer.innerHTML = `${step}`
}

const closeStep = () => {
  stepsContainer.classList.add("delete")
}

const animation = (element) => {
  element.animate([
    { zIndex: 0 },
    { zIndex: 100}
  ], {
    duration: 1000,
    fill: 'forwards'
  })
}

previousStepButton.addEventListener("click", previousStep)
nextStepButton.addEventListener("click", nextStep)
closeButton.addEventListener("click", closeStep)
