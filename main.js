function loadIntroForm() {
    const body = document.getElementById("assessment-body");
    
    const introForm = document.createElement("form");
    introForm.classList.add("intro-form");

    const introText = document.createElement("p");
    introText.textContent = "Welcome to the Moogle Browser Assessment! This is a 20-question-long assessment meant to determine your level of basic browser knowledge. Each question is worth 5 points, but if you don't know the answer to a question, don't panic! There will be a help button available for each question, and if you're still unsure, you can always skip ahead!";
    introText.classList.add("intro-text");

    const startButton = document.createElement("button");
    startButton.type = "button";
    startButton.textContent = "START";
    startButton.classList.add("start-button");

    introForm.appendChild(introText);
    introForm.appendChild(startButton);

    body.appendChild(introForm);
}

loadIntroForm();