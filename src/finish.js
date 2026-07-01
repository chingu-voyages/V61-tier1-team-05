import { hidden_word } from "./keyboard-input.js";

const url=new URL(window.location.href);
url.searchParams.set('skipWelcome','true');

export function finish_message(message){
    const parentDiv=document.createElement("div");
    parentDiv.classList.add("overlay-background");

    const contentDiv=document.createElement("div");
    contentDiv.classList.add("overlay-content");

    const finishP=document.createElement("p");
    const finishH=document.createElement("h3");
    const answerSpan=document.createElement("span");
    const wordP=document.createElement("p");
    wordP.textContent=`The word was `;

    answerSpan.id="answer";
    answerSpan.textContent=hidden_word.toUpperCase();
    answerSpan.style.color="green";

    if (message=="failure"){
        finishH.textContent="You were close!";
        finishP.textContent="you'll get it next time!";
    }
    else{
        finishH.textContent="Congratulations! 👏"
        finishP.textContent="you have guessed the word right!";
    }

    const againButton=document.createElement("button");
    againButton.textContent="Play again";
    againButton.classList.add("overlay-button");
    againButton.addEventListener("click",()=>{
        window.location.href=url.toString();
    })

    wordP.appendChild(answerSpan);

    contentDiv.appendChild(finishH);
    contentDiv.appendChild(wordP);
    contentDiv.appendChild(finishP);
    contentDiv.appendChild(againButton);
    parentDiv.appendChild(contentDiv);
    document.body.appendChild(parentDiv);
}

