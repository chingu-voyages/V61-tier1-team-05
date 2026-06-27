export function buildGrid() {
    for (let i = 0; i < 6; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.id = `row_${i}`;
        rowDiv.className = "grid-row";
        for (let j = 0; j < 5; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.id = `square_${i}_${j}`;
            squareDiv.className = "grid-square";
            rowDiv.appendChild(squareDiv);
        }
        document.body.appendChild(rowDiv);
    }
}