import { userData } from './main.js';

export function loadResults() {
    const testCompleteSound = new Audio('./sounds/test-complete.mp3');
    testCompleteSound.play();

    const result = userData.userScore;
    const resultOfTwenty = result / 5;

    const body = document.getElementById("assessment-body");
    
    const resultForm = document.createElement("form");
    resultForm.classList.add("result-form");

    const userMessage = document.createElement("p");
    userMessage.classList.add("user-message");

    if (result < 50) {
        userMessage.innerHTML = 'Better luck next time!';
    } else if (result >= 50 && result <= 75) {
        userMessage.innerHTML = 'Not too bad!';
    } else {
        userMessage.innerHTML = 'Excellent job!';
    }

    const score = document.createElement('div');
    score.classList.add('score');
    score.innerHTML = `${result}%`;

    const scoreDetails = document.createElement('p');
    scoreDetails.classList.add('score-details');
    scoreDetails.innerHTML = `You answered ${resultOfTwenty} out of 20 questions correctly!  Click 'Try Again' to retake the assessment, or close out of the page if you are happy with your score.`;

    const tryAgainButton = document.createElement("button");
    tryAgainButton.type = "button";
    tryAgainButton.textContent = "TRY AGAIN";
    tryAgainButton.classList.add("try-again-button");

    const mouseClickSound = new Audio('./sounds/mouse-click.mp3');

    resultForm.appendChild(userMessage);
    resultForm.appendChild(score);
    resultForm.appendChild(scoreDetails);
    resultForm.appendChild(tryAgainButton);

    body.appendChild(resultForm);

    tryAgainButton.addEventListener('click', function() {
        mouseClickSound.play();
        window.location.reload();
    })
}