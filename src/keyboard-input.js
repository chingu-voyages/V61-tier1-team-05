let currentRow = 0
let currentCol = 0

window.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
        if (currentCol > 0) {
            currentCol--;
            const square = document.getElementById(`square_${currentRow}_${currentCol}`);
            square.textContent = "";
        }
    } else if (event.key === "Enter") {
        if (currentCol === 5) {
            currentRow++;
            currentCol = 0;
        }
    } else if (/^[a-zA-Z]$/.test(event.key)) {
        if (currentCol < 5) {
            const square = document.getElementById(`square_${currentRow}_${currentCol}`);
            currentCol++;
        }
    }
console.log("A key was pressed: ", event.key);      
});