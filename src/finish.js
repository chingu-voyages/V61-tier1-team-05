const url=new URL(window.location.href);
url.searchParams.set('skipWelcome','true');

export function finish_message(message){
    const parentDiv=document.createElement("div");
    parentDiv.classList.add("overlay-background");

    const contentDiv=document.createElement("div");
    contentDiv.classList.add("overlay-content");

    const successP=document.createElement("p");
    if (message=="failure")
        successP.textContent="You lost! better luck next time";
    else
        successP.textContent="Congratulations! you have guessed the word right!";

    const againButton=document.createElement("button");
    againButton.textContent="Play again";
    againButton.classList.add("overlay-button");
    againButton.addEventListener("click",()=>{
        window.location.href=url.toString();
    })

    contentDiv.appendChild(successP);
    contentDiv.appendChild(againButton);
    parentDiv.appendChild(contentDiv);
    document.body.appendChild(parentDiv);
}

