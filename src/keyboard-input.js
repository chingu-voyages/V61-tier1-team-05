let currentRow = 0;
let currentCol = 0;
let word_list=[];




window.addEventListener("keydown", (event) => {
    if (currentRow>=6)
        return;
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
                checkWord();
            }
            else{
                errorMessage("Word is too short!");
            }
            break;
        default:
            if (/^[a-zA-Z]$/.test(event.key) && currentCol < 5) {
                const square = document.getElementById(`square_${currentRow}_${currentCol}`);
                square.innerText = event.key.toUpperCase();
                currentCol++;
            }
    }
});

loadWords();

updateArrow();


function checkWord(){
    rowDiv=document.querySelector(`#row_${currentRow}`);
    if (rowDiv==null)
        return;
    let word="";
    for (let i=0;i<rowDiv.children.length;i++){
        word+=rowDiv.children[i].innerText;
    }
    if (word_list.includes(word.toLowerCase())){
        currentCol=0;
        currentRow++;
        updateArrow();
    }
    else{
        errorMessage("Word does not exist!");
    }
}

async function loadWords(){
    try{
        const response=await fetch("./src/words.json");
        if (!response.ok){
            throw new Error(`error ${response.status}`);
        } 

        word_list=await response.json();
    }
    catch{
        errorMessage("error");
    }
}


function updateArrow() {

    let rowDiv = document.querySelector(`#row_${currentRow}`);
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
function errorMessage(message){
    const contentDiv=document.createElement("div");
    contentDiv.classList.add("error-message","overlay-content","hidden");
    contentDiv.innerText=message;

    const rowDiv=document.querySelector(`#row_${currentRow}`);
    rowDiv.appendChild(contentDiv);

    setTimeout(()=>{
        contentDiv.classList.remove("hidden");
    },10);

    setTimeout(()=>{
        contentDiv.classList.add("hidden");

        setTimeout(()=>{
            contentDiv.remove();
        },500);
    },2000);
}