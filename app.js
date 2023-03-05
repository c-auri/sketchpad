let color = "salmon"

const slider = document.querySelector('#slider-input')
const sliderValues = document.querySelectorAll('.slider-value')
const pad = document.querySelector('#sketchpad')
const padSize = pad.offsetHeight

slider.addEventListener("input", e => fillPad(e.target.value))

function fillPad(n) {
    sliderValues.forEach(e => e.innerText = n)
    pad.textContent = ""
    pad.style.gridTemplateColumns = `repeat(${n} , 1fr)`
    for (let i = 0; i < n ** 2; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        cell.addEventListener("mouseover", e => paint(e.target))
        pad.appendChild(cell)
    }
}

function paint(cell) {
    cell.style.backgroundColor = color
}

fillPad(16)