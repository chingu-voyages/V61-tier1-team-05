const url=new URL(window.location.href);
url.searchParams.set('skipWelcome','true');

export function finish_message(message){
    const parentDiv=document.createElement("div");
    parentDiv.classList.add("overlay-background");

    const contentDiv=document.createElement("div");
    contentDiv.classList.add("overlay-content");

    const finishP=document.createElement("p");
    const finishH=document.createElement("h3");
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

    contentDiv.appendChild(finishH);
    contentDiv.appendChild(finishP);
    contentDiv.appendChild(againButton);
    parentDiv.appendChild(contentDiv);
    document.body.appendChild(parentDiv);
}

