function loadIntroForm() {
    const body = document.getElementById("assessment-body");
    
    const introForm = document.createElement("form");
    introForm.classList.add("intro-form");

    const startButton = document.createElement("button");
    startButton.type = "submit";
    startButton.textContent = "Start";
    startButton.classList.add("start-button");

    introForm.appendChild(startButton);
}

loadIntroForm();