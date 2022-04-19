let countEl = document.getElementById("count-el")
let constMeterEl = document.getElementById("const-meter-el")
let meterToFeetEl = document.getElementById("meter-to-feet-el")
let constFeetEl = document.getElementById("const-feet-el")
let feetToMeterEl = document.getElementById("feet-to-meter-el")
let constLitersEl = document.getElementById("const-liters-el")
let litersToGallonsEl = document.getElementById("liters-to-gallons-el")
let constGallonsEl = document.getElementById("const-gallons-el")
let gallonsToLitersEl = document.getElementById("gallons-to-liters-el")

let count = countEl.textContent
constMeterEl.textContent = count
constFeetEl.textContent = count
constGallonsEl.textContent = count
constLitersEl.textContent = count

meterToFeetEl.textContent = (count * (1/0.3048)).toFixed(3)
feetToMeterEl.textContent = (count * (0.3048/1)).toFixed(3)
gallonsToLitersEl.textContent = (count * 3.785).toFixed(3)
litersToGallonsEl.textContent = (count / 3.785).toFixed(3)