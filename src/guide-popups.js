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


    let answerString = "";
    if (square.classList.contains("gray-box")) {
        answerString = " was not in the word";
    } else if (square.classList.contains("yellow-box")) {
        answerString = " was in the word but in the wrong position";
    } else if (square.classList.contains("green-box")) {
        answerString = " was in the word and the right position";
    } else {
        return; 
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
    },3000)
}