let container = document.querySelector(".container")


for (let i = 0; i < 16; i++) {
    let cell = document.createElement("div")
    cell.className = "cell"
    container.appendChild(cell)
}