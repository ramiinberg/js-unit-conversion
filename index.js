let countEl = document.getElementById("count-el")
let constMeterEl = document.getElementById("const-meter-el")
let meterToFeetEl = document.getElementById("meter-to-feet-el")
let constFeetEl = document.getElementById("const-feet-el")
let feetToMeterEl = document.getElementById("feet-to-meter-el")
let constLitersEl = document.getElementById("const-liters-el")
let litersToGallonsEl = document.getElementById("liters-to-gallons-el")
let constGallonsEl = document.getElementById("const-gallons-el")
let gallonsToLitersEl = document.getElementById("gallons-to-liters-el")
let constKgEl = document.getElementById("const-kg-el")
let kgToPoundsEl = document.getElementById("kg-to-pounds-el")
let constPoundsEl = document.getElementById("const-pounds-el")
let poundsToKgEl = document.getElementById("pounds-to-kg-el")

const METERFEET = 3.28084
const GALLONSLITERS = 3.785541
const KGPOUNDS = 2.20462

function handleInput () {
  value = countEl.value

  if(value == "") {
    updateValues(0)
  }
  else {
    updateValues(value)
  }
}

function updateValues(value) {
  function initializeConstants() {
    constMeterEl.textContent = value
    constFeetEl.textContent = value
    constGallonsEl.textContent = value
    constLitersEl.textContent = value
    constKgEl.textContent = value
    constPoundsEl.textContent = value
  }

  function meterFeet() {
    meterToFeetEl.textContent = (value * METERFEET).toFixed(3)
    feetToMeterEl.textContent = (value / METERFEET).toFixed(3)
  }

  function gallonsLiters() {
    gallonsToLitersEl.textContent = (value * GALLONSLITERS).toFixed(3)
    litersToGallonsEl.textContent = (value / GALLONSLITERS).toFixed(3)
  }

  function kgPounds() {
    kgToPoundsEl.textContent = (value * KGPOUNDS).toFixed(3)
    poundsToKgEl.textContent = (value / KGPOUNDS).toFixed(3)
  }

  initializeConstants()
  meterFeet()
  gallonsLiters()
  kgPounds()
}

updateValues(20)
countEl.addEventListener("input", handleInput)