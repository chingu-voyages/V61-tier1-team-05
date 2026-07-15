import { hidden_word } from "./keyboard-input.js";

const url=new URL(window.location.href);
url.searchParams.set('skipWelcome','true');


export function finish_message(message, attemptsCount) {
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("overlay-background");

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("overlay-content");

    const finishP = document.createElement("p");
    const finishDiv = document.createElement("div");
    const finishDivmessage=document.createElement("div");
    const answerSpan = document.createElement("span");
    const wordP = document.createElement("p");
    wordP.textContent = `The word was `;

    answerSpan.id = "answer";
    answerSpan.textContent = hidden_word.toUpperCase();
    answerSpan.style.color = "green";

    finishDiv.id="finish-div";
    finishDivmessage.id="finish-div-message";
   
    if (message === "failure") {
        finishDivmessage.textContent="You were close!"; 
        finishP.textContent = "You'll get it next time!";
    } 
    else {
        if (attemptsCount <= 4) {
            finishDivmessage.textContent = "Excellent!";
            finishDiv.appendChild(finishDivmessage);
            for (let i=0;i<3;i++){
                const starImg = document.createElement("img");
                starImg.src = "./star.png";
                starImg.classList.add("star-image");
                finishDiv.appendChild(starImg);
            }

        } else if (attemptsCount <= 6) {
            finishDivmessage.textContent = "Good job! 👍";
            finishDiv.appendChild(finishDivmessage);
        } else {
            finishDivmessage.textContent = "Phew! That was close 😮‍💨";
            finishDiv.appendChild(finishDivmessage);
        } 
        
        finishP.textContent = `You guessed the word right in ${attemptsCount} attempts!`;
    }

    const againButton=document.createElement("button");
    againButton.textContent="Play again";
    againButton.classList.add("overlay-button");
    againButton.addEventListener("click",()=>{
        window.location.href=url.toString();
    })

    wordP.appendChild(answerSpan);

    contentDiv.appendChild(finishDiv);
    contentDiv.appendChild(wordP);
    contentDiv.appendChild(finishP);
    contentDiv.appendChild(againButton);
    parentDiv.appendChild(contentDiv);
    document.body.appendChild(parentDiv);
}

