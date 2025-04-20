document.addEventListener("mousedown", () => {
    isMouseDown = true;
})

document.addEventListener("mouseup", () => {
    isMouseDown = false;
})

function colorSquare(event){
    event.target.style.backgroundColor = "rgb(39, 28, 2)";
}

function dragColor(event){
    if (isMouseDown) event.target.style.backgroundColor = "rgb(39, 28, 2)";
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
        
        if (isClickToDrawOn){
            gridSquare.addEventListener("mouseover", dragColor);
            gridSquare.addEventListener("mousedown", colorSquare);
        }
        else{
            gridSquare.addEventListener("mouseover", colorSquare);
        }

        gridRow.appendChild(gridSquare);
    }
    if (isBordersOn) {
        isBordersOn = false;
        toggleBorders();
    }
        
}

function changeNumSquares(){
    let numSquares = prompt("How many squares should be per side? (1-100)");

    while (numSquares > 100){
        numSquares = prompt("The number has to be between 1 and 100")
    }

    gridContainer.remove();

    gridContainer = document.createElement("div");
    gridContainer.classList.add("gridContainer");
    gameContainer.insertBefore(gridContainer, document.querySelector(".btnsContainer"));

    makeGrid(numSquares);
}

function toggleClickToDraw(){
    let gridSquares = document.querySelectorAll(".gridSquare");
    if (isClickToDrawOn){
        gridSquares.forEach((gridSquare) => {
            gridSquare.removeEventListener("mouseover", dragColor);
            gridSquare.addEventListener("mousedown", colorSquare);
            
            gridSquare.addEventListener("mouseover", colorSquare);
        })
        isClickToDrawOn = false;    
    }
    else{
        gridSquares.forEach((gridSquare) => {
            gridSquare.removeEventListener("mouseover", colorSquare);
            
            gridSquare.addEventListener("mouseover", dragColor);
            gridSquare.addEventListener("mousedown", colorSquare);
        })
        isClickToDrawOn = true;
    }
    
}

function toggleBorders(){
    let gridSquares = document.querySelectorAll(".gridSquare")
    if (isBordersOn){
        gridSquares.forEach((gridSquare) => {
            gridSquare.style.border = "0px";
        })
        isBordersOn = false;
    }
    else{
        gridSquares.forEach((gridSquare) => {
            gridSquare.style.border = "2px rgb(51, 30, 4) solid";
        })
        isBordersOn = true;
    }
}

let gridContainer = document.querySelector(".gridContainer");
let ratioBtn = document.querySelector(".gridRatioBtn");
let gameContainer = document.querySelector(".gameContainer");
let clickBtn = document.querySelector(".clickToDrawBtn");
let borderBtn = document.querySelector(".borderBtn");

let isClickToDrawOn = false;
let isBordersOn = false;
let isMouseDown;

makeGrid(20);

ratioBtn.addEventListener("click", changeNumSquares);

clickBtn.addEventListener("click", toggleClickToDraw);

borderBtn.addEventListener("click", toggleBorders);