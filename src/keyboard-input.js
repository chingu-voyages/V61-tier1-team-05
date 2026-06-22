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
    const backgroundDiv=document.createElement("div");
    backgroundDiv.classList.add("overlay-background");
    backgroundDiv.style.backgroundColor="rgba(0,0,0,0.4)";

    const contentDiv=document.createElement("div");
    contentDiv.classList.add("overlay-content");
    contentDiv.innerText=message;

    backgroundDiv.appendChild(contentDiv);
    document.body.appendChild(backgroundDiv);


    setTimeout(()=>{
        backgroundDiv.classList.add("hidden");
        contentDiv.classList.add("hidden");

        setTimeout(()=>{
            backgroundDiv.remove();
        },500);
    },2000);
}