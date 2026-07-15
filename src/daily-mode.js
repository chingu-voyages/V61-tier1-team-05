export function daily_mode(){
    const dailymodeButton=document.createElement("button");
    dailymodeButton.id="daily-mode-button"; 
    dailymodeButton.textContent="Daily mode";

    const buttonGroup=document.querySelector("#button-group");
    buttonGroup.appendChild(dailymodeButton);
}