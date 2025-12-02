import { userData } from './main.js';

export function loadResults() {
    const result = userData.userScore;
    const resultOfTwenty = result / 5;

    const body = document.getElementById("assessment-body");
    
    const resultForm = document.createElement("form");
    resultForm.classList.add("result-form");

    const introText = document.createElement("p");
    introText.textContent = `Congratulations!  You completed the assessment with a score of ${result}%.  This means that you answered ${resultOfTwenty} questions correctly!`;
    introText.classList.add("intro-text");

    const tryAgainButton = document.createElement("button");
    tryAgainButton.type = "button";
    tryAgainButton.textContent = "TRY AGAIN";
    tryAgainButton.classList.add("try-again-button");

    const mouseClickSound = new Audio('./sounds/mouse-click.mp3');

    introForm.appendChild(introText);
    introForm.appendChild(startButton);

    body.appendChild(introForm);

    tryAgainButton.addEventListener('click', function() {
        mouseClickSound.play();
        window.location.reload();
    })
}