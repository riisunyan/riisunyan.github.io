const min = 1
const max = 10000
let value = Math.floor(Math.random() * (max - min + 1)) + min
const button = document.getElementById("button")
const resetButton = document.getElementById("reset")
let seconds = 0
const timeCounter = document.getElementById("timeCounter")


resetButton.addEventListener("click", () => {
    value = Math.floor(Math.random() * (max - min + 1)) + min
    button.textContent = value
})

button.addEventListener("click", () => {
    if (value % 2 === 0) {
        value /= 2
    }
    else if (value % 2 === 1) {
        value = value * 3 + 1
    }
    button.textContent = value
})

setInterval(() => {
    seconds ++
    timeCounter.innerText = `You have been on this page for ${seconds} seconds.`
}, 1000)
