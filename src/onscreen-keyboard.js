const keyboardDiv=document.createElement("div");
keyboardDiv.id="keyboard";

const qrowDiv=document.createElement("div");
qrowDiv.id="qrow";
qrowDiv.classList.add("keyboard-row")

const arowDiv=document.createElement("div");
arowDiv.id="arow";
arowDiv.classList.add("keyboard-row")

const zrowDiv=document.createElement("div");
zrowDiv.id="zrow";
zrowDiv.classList.add("keyboard-row")

const qrow=['Q','W','E','R','T','Y','U','I','O','P'];
const arow=['A','S','D','F','G','H','J','K','L'];
const zrow=["⌫",'Z','X','C','V','B','N','M',"Enter"];

for (let i=0;i<qrow.length;i++){
    const Button=document.createElement("button");
    Button.classList.add("key");
    Button.id=`key_${qrow[i]}`;
    Button.textContent=qrow[i];
    qrowDiv.appendChild(Button);
}
keyboardDiv.appendChild(qrowDiv);

for (let i=0;i<arow.length;i++){
    const Button=document.createElement("button");
    Button.classList.add("key");
    Button.id=`key_${arow[i]}`;
    Button.textContent=arow[i];
    arowDiv.appendChild(Button);
}
keyboardDiv.appendChild(arowDiv);

for (let i=0;i<zrow.length;i++){
    const Button=document.createElement("button");
    Button.classList.add("key");
    Button.id=`key_${zrow[i]}`;
    Button.textContent=zrow[i];
    if (zrow[i]=="Enter"){
        Button.style.backgroundColor="#A9E38A";
        Button.style.borderWidth="1px";
    }
    zrowDiv.appendChild(Button);
}
keyboardDiv.appendChild(zrowDiv);

document.body.appendChild(keyboardDiv);



keyboardDiv.addEventListener("click",(event)=>{
    const targetButton=event.target.closest(".key");
    if(!targetButton)
        return;

    let keyValue=targetButton.id.replace("key_","");
    if (keyValue=="⌫")
        keyValue="Backspace";

    const fakekeydownEvent=new CustomEvent("keydown",{
        detail:{isVirtual:true}
    });
    Object.defineProperty(fakekeydownEvent,"key",{value:keyValue});
    window.dispatchEvent(fakekeydownEvent);
})