import { errorMessage, hidden_word } from "./main.js";
import { setHiddenWord } from "./main.js";
import { loadWords } from "./main.js";

export function initialize_daily_mode(){
    let daily_mode_on=false;
    const dailymodeButton=document.createElement("button");
    dailymodeButton.id="daily-mode-button"; 
    dailymodeButton.textContent="Daily mode";

    const buttonGroup=document.querySelector("#button-group");
    buttonGroup.appendChild(dailymodeButton);

    dailymodeButton.addEventListener("click",()=>{
        daily_mode_on = !daily_mode_on;
        if (daily_mode_on){
            dailymodeButton.style.backgroundColor="green";
            errorMessage("Daily mode is on!");
            setHiddenWord(getDailyWordIndex());            
        }
        else{
            dailymodeButton.style.backgroundColor="darkred";
            loadWords(); 
        }
    }) 
}

function getDailySeed(dateNum){
    const multiplier=214917;
    const increment=1013904223;
    const modulus=Math.pow(2,32);
    
    return (dateNum*multiplier+increment)%modulus;
}
function getDailyWordIndex(arraylength=500){
    const now=new Date();
    const year=now.getUTCFullYear();
    const month=String(now.getUTCMonth()+1).padStart(2,'0');
    const day=String(now.getUTCDay()).padStart(2,'0');

    const dailyNumber=parseInt(`${year}${month}${day}`);
    const seed = getDailySeed(dailyNumber);
    const wordIndex=seed%arraylength;
    return wordIndex;
}