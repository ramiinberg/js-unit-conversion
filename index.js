let countEl = document.getElementById("count-el")
let constMeterEl = document.getElementById("const-meter-el")
let meterToFeetEl = document.getElementById("meter-to-feet-el")
let constFeetEl = document.getElementById("const-feet-el")
let feetToMeterEl = document.getElementById("feet-to-meter-el")

let count = countEl.textContent
constMeterEl.textContent = count
meterToFeetEl.textContent = (count * (1/0.3048)).toFixed(3)
constFeetEl.textContent = count
feetToMeterEl.textContent = (count * (0.3048/1)).toFixed(3)
