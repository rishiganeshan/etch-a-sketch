let container = document.querySelector(".container")


for (let i = 0; i < 4; i++) {
    let row = document.createElement("div")
    row.className = "row"
    for (let j = 0; j < 4; j++) {
        let cell = document.createElement("div")
        cell.className = "cell"
        row.appendChild(cell)
    }
    container.append(row)
}