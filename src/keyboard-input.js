let currentRow = 0;
let currentCol = 0;

function updateArrow(row) {

    let rowDiv = document.querySelector(`#row_${row}`);
    if (!rowDiv)
        return;

    let arrowImg = document.querySelector("#arrow-img");
    
    if (!arrowImg){
        arrowImg=document.createElement("img");
        arrowImg.src = "src/arrow.png";
        arrowImg.id = "arrow-img";
    }


    rowDiv.appendChild(arrowImg);

}

window.addEventListener("keydown", (event) => {

    switch (event.key) {
        case "Backspace":
            if (currentCol > 0) {
                currentCol--;
                const square = document.getElementById(`square_${currentRow}_${currentCol}`);
                square.textContent = "";
            }
            break;
        case "Enter":
            if (currentCol == 5) {
                currentRow++;
                currentCol = 0;
                updateArrow(currentRow);
            }
            break;
        default:
            if (/^[a-zA-Z]$/.test(event.key) && currentCol < 5) {
                const square = document.getElementById(`square_${currentRow}_${currentCol}`);
                square.innerText = event.key.toUpperCase();
                currentCol++;
            }
            console.log(event.key);
    }
});
updateArrow(currentRow);