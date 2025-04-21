document.addEventListener("mousedown", () => {
    isMouseDown = true;
})

document.addEventListener("mouseup", () => {
    isMouseDown = false;
})

function colorSquare(event){
    //Prevent dragging and dropping
    event.preventDefault();

    if (isDarkOn){
        opacity += 0.02;
    }

    if (isRainbowOn){
        rgbArray = [
            Math.floor(Math.random() * 255), 
            Math.floor(Math.random() * 255), 
            Math.floor(Math.random() * 255)]
    }

    event.target.style.backgroundColor = `rgba(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}, ${opacity})`;
}

function dragColor(event){
    //Prevent dragging and dropping
    event.preventDefault();

    if (isDarkOn && isMouseDown){
        opacity += 0.05;
    }

    if (isRainbowOn){
        rgbArray = [
            Math.floor(Math.random() * 255), 
            Math.floor(Math.random() * 255), 
            Math.floor(Math.random() * 255)]
    }

    if (isMouseDown) {
        event.target.style.backgroundColor = `rgba(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}, ${opacity})`;
    }
}

function makeGrid(numSquares){
    let gridContainer = document.querySelector(".gridContainer");
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
        borderBtn.classList.toggle("active");
    }
        
}

function resetGrid(){
    let gridContainer = document.querySelector(".gridContainer");
    gridContainer.remove();

    gridContainer = document.createElement("div");
    gridContainer.classList.add("gridContainer");
    let gameContainer = document.querySelector(".gameContainer");
    gameContainer.insertBefore(gridContainer, document.querySelector(".btnsContainer"));

    document.querySelector(".rangeNumber").textContent = scrollNum.value;

    makeGrid(scrollNum.value);

    if (isDarkOn)
        opacity = 0.1;
    else
        opacity = 1;
}

function toggleClickToDraw(){
    clickBtn.classList.toggle("active");

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
    borderBtn.classList.toggle("active");

    let gridSquares = document.querySelectorAll(".gridSquare")
    if (isBordersOn){
        gridSquares.forEach((gridSquare) => {
            gridSquare.style.border = "0px";
        })
        isBordersOn = false;
    }
    else{
        gridSquares.forEach((gridSquare) => {
            gridSquare.style.border = "1px rgb(51, 30, 4) solid";
        })
        isBordersOn = true;
    }
}

let resetBtn = document.querySelector(".gridResetBtn");
let clickBtn = document.querySelector(".clickToDrawBtn");
let borderBtn = document.querySelector(".borderBtn");
let scrollNum = document.querySelector(".scrollNumSquares");
let rainbowBtn = document.querySelector(".rainbowBtn");
let opacityBtn = document.querySelector(".fadeBtn");

//dark i border ruzno na pocetku
//estetika malo maybge

let isClickToDrawOn = false;
let isBordersOn = false;
let isRainbowOn = false;
let isDarkOn = false;
let isMouseDown;

let rgbArray = [39, 28, 2];
let opacity = 1;

makeGrid(20);

resetBtn.addEventListener("click", resetGrid);

clickBtn.addEventListener("click", toggleClickToDraw);

borderBtn.addEventListener("click", toggleBorders);

scrollNum.addEventListener("input", resetGrid);

rainbowBtn.addEventListener("click", () => {
    rainbowBtn.classList.toggle("active");
    
    if(isDarkOn)
        opacity = 0.1;

    if (isRainbowOn){
        isRainbowOn = false;
        rgbArray = [39, 28, 2];
    }
    else{
        isRainbowOn = true;
    }
});

opacityBtn.addEventListener("click", () => {
    opacityBtn.classList.toggle("active");

    if (isDarkOn){
        isDarkOn = false;
        opacity = 1;
    }
    else{
        isDarkOn = true;
        opacity = 0.1;
    }
})