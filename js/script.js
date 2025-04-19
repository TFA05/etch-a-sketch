function makeGrid(){
    let gridRow;
    for(let i = 0; i < 16 * 16; i++){
        if (i % 16 == 0){
            gridRow = document.createElement("div");
            gridRow.classList.add("gridRow");
            gridContainer.appendChild(gridRow);
        }
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridRow.appendChild(gridSquare);
    }
}

let gridContainer = document.querySelector(".gridContainer");
makeGrid();