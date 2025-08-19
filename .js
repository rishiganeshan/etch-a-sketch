let container = document.querySelector(".container")


for (let i = 0; i < 16; i++) {
    let row = document.createElement("div")
    row.className = "row"
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement("div")
        cell.className = "cell"
        row.appendChild(cell)
    }
    container.append(row)
}

let cells = document.querySelectorAll(".cell")
cells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black"
    })

})