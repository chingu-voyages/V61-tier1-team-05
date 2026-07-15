import { errorMessage } from "./main.js";
export function daily_mode(){
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
        }
        else
            dailymodeButton.style.backgroundColor="darkred";
         
    }) 
}