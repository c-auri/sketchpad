const pad = document.querySelector('#sketchpad')
const padSize = pad.offsetHeight

function fillPad(count) {
    pad.style.gridTemplateColumns = `repeat(${count} , 1fr)`
    for (let i = count ** 2; i > 0; i-- > 0) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        pad.appendChild(cell)
    }
}

fillPad(16)