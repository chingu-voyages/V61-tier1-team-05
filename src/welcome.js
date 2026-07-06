const urlParams = new URLSearchParams(window.location.search);
const skipWelcome = urlParams.get("skipWelcome");

if (skipWelcome !== 'true') {

    const backgroundDiv = document.createElement("div");
    backgroundDiv.classList.add("overlay-background");

    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("overlay-content");

    const welcomeH2 = document.createElement("h2");
    welcomeH2.innerText = "Welcome to Wordle!";
    welcomeDiv.appendChild(welcomeH2);

    const welcomeP = document.createElement("p");
    welcomeP.innerText = "Try to guess the 5 letter word in 6 tries or less!";
    welcomeDiv.appendChild(welcomeP);

    const startButton = document.createElement("button");
    startButton.textContent = "Start!";
    startButton.classList.add("overlay-button");

    welcomeDiv.appendChild(startButton);
    backgroundDiv.appendChild(welcomeDiv);
    document.body.appendChild(backgroundDiv);

    startButton.addEventListener("click", () => {
        backgroundDiv.remove();
    });
}



