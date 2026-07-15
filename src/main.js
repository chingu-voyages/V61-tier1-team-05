import { evaluateWord } from "./colors-letter.js";
import { daily_mode } from "./daily-mode.js";
import { dark_mode } from "./dark-mode.js";
import { finish_message } from "./finish.js";
import { buildGrid } from "./grid.js";
import { generateEvents } from "./guide-popups.js";
import { initializeKeyboard } from "./onscreen-keyboard.js";
import { welcomeScreen } from "./welcome.js";
import word_list from "./words.json" with {type:'json'};

let currentRow = 0;
let currentCol = 0;
export let hidden_word="";



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
            event.preventDefault();
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

function updateKeyboard(letter,color){
    let keyboard_letter = document.querySelector(`#key_${letter}`);
    if (!keyboard_letter)
        return;
    if (keyboard_letter.classList.contains('green-box'))
        return;
    if (keyboard_letter.classList.contains('yellow-box') && color!='green')
        return;
    
    keyboard_letter.classList.remove('green-box','yellow-box','gray-box');
    keyboard_letter.classList.add(`${color}-box`);
}

function checkWord(){
    let rowDiv=document.querySelector(`#row_${currentRow}`);
    if (rowDiv==null)
        return;
    let word="";
    for (let i=0;i<5;i++){
        word+=rowDiv.children[i].innerText;
    }
    if (word_list.includes(word.toLowerCase())){
        let squareColors=evaluateWord(word,hidden_word);
        
        for (let i = 0; i < 5; i++) {
            rowDiv.children[i].classList.add(`${squareColors[i]}-box`);
            updateKeyboard(word[i],squareColors[i]);
        }
        if (word.toLowerCase()==hidden_word){
            finish_message("success", currentRow+1);
        }
        else {
            currentCol = 0;
            currentRow++;

            if (currentRow == 6) {
                finish_message("failure", currentRow+1);
            }
            else {
                updateArrow();
                generateEvents(rowDiv);
            }
        }
    }
    else{
        errorMessage("Word does not exist!");
    }
}

async function loadWords(){
    try{
        const index=Math.floor(word_list.length*Math.random());
        hidden_word=word_list[index];
        console.log(hidden_word);
    }
    catch(error){
        errorMessage(error);
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
export function errorMessage(message){
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

welcomeScreen();

dark_mode();

daily_mode();

buildGrid();

initializeKeyboard();

loadWords();

updateArrow();
