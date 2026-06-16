const backgroundDiv=document.createElement("div");
backgroundDiv.classList.add("overlay-background");

const welcomeDiv=document.createElement("div");
welcomeDiv.classList.add("overlay-content");

const welcomeH2=document.createElement("h2");
welcomeH2.innerText="Welcome to our Wordle!";
welcomeDiv.appendChild(welcomeH2);

const welcomeP=document.createElement("p");
welcomeP.innerText="Try to guess the 5 letter word in 6 tries or less!";
welcomeDiv.appendChild(welcomeP);

const startButton=document.createElement("button");
startButton.textContent="Start!";
startButton.classList.add("start-button");

welcomeDiv.appendChild(startButton);
backgroundDiv.appendChild(welcomeDiv);
document.body.appendChild(backgroundDiv);

startButton.addEventListener("click", ()=>{
    backgroundDiv.remove();
});