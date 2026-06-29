export function generateEvents(rowDiv){
    const squares=rowDiv.children;
    const array=Array.from(squares);
    array.forEach(square => {
        square.addEventListener('click',handleSquare);
    });
}

function handleSquare(event){
    const square=event.currentTarget;
    
    const exists=document.querySelector('#cloud-div');
    if (exists!=null){
        return;
    }

    const parentDiv=document.createElement("div");
    parentDiv.id="cloud-div";

    const textDiv=document.createElement("p");
    textDiv.id="cloud-text";

    const color=square.classList[1];
    let answerString="";

    switch(color){
        case "gray-box":
            answerString=" was not in the word";
            break;
        case "yellow-box":
            answerString=" was in the word but in the wrong position";
            break;
        case "green-box":
            answerString=" was in the word and the right position";
            break;
        default: "error";
    }

    textDiv.innerText=`${square.innerText}${answerString}`;


    const cloudImg=document.createElement("img");
    cloudImg.src="src/cloud.png";
    cloudImg.id="cloud-img";


    parentDiv.appendChild(cloudImg);
    parentDiv.appendChild(textDiv);
    square.appendChild(parentDiv);

    setTimeout(()=>{
        parentDiv.classList.add("show");
    },10);

    setTimeout(()=>{
        parentDiv.classList.remove("show");

        setTimeout(()=>{
            parentDiv.remove();
        },300);
    },3000);
}