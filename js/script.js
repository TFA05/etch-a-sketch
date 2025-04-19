function changeColorWhenHovering(gridSquare){
    gridSquare.addEventListener("mouseover", () => {
        gridSquare.style.backgroundColor = "red";
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

let gridContainer;
let ratioBtn = document.querySelector(".gridRatioBtn");
let body = document.querySelector("body");

ratioBtn.addEventListener("click", () => {
    let numSquares = prompt("How many squares should be per side?");

    if (gridContainer){
        gridContainer.remove();
    }

    gridContainer = document.createElement("div");
    gridContainer.classList.add("gridContainer");
    body.insertBefore(gridContainer, document.querySelector("button"));

    makeGrid(numSquares);

})
