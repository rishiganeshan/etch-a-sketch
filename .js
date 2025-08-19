let container = document.querySelector(".container")
let button = document.querySelector("button")

function showPopup() {
    let numberOfSquares = null
    while (isNaN(numberOfSquares) || numberOfSquares === null || numberOfSquares > 100 || numberOfSquares <= 0) {
        numberOfSquares = +prompt('Enter your desired number of squares per side for the new grid (less than 100)')     
    }
    createGrid(numberOfSquares)
}

function incrementOpacity(cell) {
    const value = getComputedStyle(cell).getPropertyValue("background-color");

    const parts = value.match(/[\d.]+/g);

    if (parts.length === 3) {
        parts.push(1);
    }

    if (parts[3] < 1) {
        parts[3] = parseFloat(parts[3]) + 0.1;
    }
    

    cell.style.backgroundColor = `rgba(${parts.join(',')})`;


}

button.addEventListener("click", showPopup)


function createGrid(numberOfSquares = 16) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    for (let i = 0; i < numberOfSquares; i++) {
        let row = document.createElement("div")
        row.className = "row"
        for (let j = 0; j < numberOfSquares; j++) {
            let cell = document.createElement("div")
            cell.className = "cell"
            row.appendChild(cell)
        }
        container.append(row)
    }

    let cells = document.querySelectorAll(".cell")
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", (event) => {
            // event.target.style.backgroundColor = "black"
            incrementOpacity(event.target)
        })

    })

}

createGrid()


