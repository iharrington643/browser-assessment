import { userData } from './main.js';

export function loadResults() {
    const result = userData.userScore;
    const resultOfTwenty = result / 5;

    const body = document.getElementById("assessment-body");
    
    const introForm = document.createElement("form");
    introForm.classList.add("intro-form");

    const introText = document.createElement("p");
    introText.textContent = `Congratulations!  You completed the assessment with a score of ${result}.  This means that you answered ${resultOfTwenty} questions correctly!`;
    introText.classList.add("intro-text");

    const startButton = document.createElement("button");
    startButton.type = "button";
    startButton.textContent = "START";
    startButton.classList.add("start-button");

    const mouseClickSound = new Audio('./sounds/mouse-click.mp3');

    introForm.appendChild(introText);
    introForm.appendChild(startButton);

    body.appendChild(introForm);
}