function changeColorWhenHovering(gridSquare){
    gridSquare.addEventListener("mouseover", () => {
        gridSquare.style.backgroundColor = "rgb(39, 28, 2)";
    })
}

function makeGrid(numSquares){
    let gridRow;
    for(let i = 0; i < numSquares**2; i++){
        if (i % numSquares == 0){
            gridRow = document.createElement("div");
            gridRow.classList.add("gridRow");
            gridContainer.appendChild(gridRow);
        }
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");

        changeColorWhenHovering(gridSquare);

        gridRow.appendChild(gridSquare);
    }
}

let gridContainer = document.querySelector(".gridContainer");
let ratioBtn = document.querySelector(".gridRatioBtn");
let gameContainer = document.querySelector(".gameContainer");

makeGrid(20);

ratioBtn.addEventListener("click", () => {
    let numSquares = prompt("How many squares should be per side?");

    gridContainer.remove();

    gridContainer = document.createElement("div");
    gridContainer.classList.add("gridContainer");
    gameContainer.insertBefore(gridContainer, document.querySelector(".btnsContainer"));

    makeGrid(numSquares);

})
