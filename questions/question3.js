import { userData } from '../main.js';
import { loadToolbar4, loadQuestion4, question4Select } from './question4.js';

export function loadToolbar3() {
    const infoBar = document.getElementById("info-bar");

    const hintButton = document.createElement('button');
    hintButton.setAttribute('id', 'hint-button');
    hintButton.innerHTML = "?";
    infoBar.appendChild(hintButton);

    const progressText = document.createElement('p');
    progressText.setAttribute('id', 'progress-text');
    progressText.innerHTML = "3 / 20";
    infoBar.appendChild(progressText);

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    infoBar.appendChild(progressBar);

    const innerBar = document.createElement('div');
    innerBar.setAttribute('id', 'inner-bar');
    innerBar.style.width = "15%";
    progressBar.appendChild(innerBar);

    const nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'next-button');
    nextButton.innerHTML = "⏭";
    infoBar.appendChild(nextButton);
}

export function loadQuestion3() {
    const body = document.getElementById("assessment-body");

    const questionThreeBox = document.createElement('div');
    questionThreeBox.classList.add('question-box');
    questionThreeBox.innerHTML = "3. Select the button to return to the previous page.";
    body.appendChild(questionThreeBox);

    const browserBox = document.createElement("div");
    browserBox.setAttribute('id', 'browser-box');
    body.appendChild(browserBox);

    const tabBar = document.createElement('div');
    tabBar.classList.add('tab-bar');
    browserBox.appendChild(tabBar);

    const tab = document.createElement('div');
    tab.classList.add('tab');
    tabBar.appendChild(tab);

    const tabText = document.createElement('p');
    tabText.classList.add('tab-text');
    tabText.innerHTML = "My Website";
    tab.appendChild(tabText);

    const closeTabButton = document.createElement('button');
    closeTabButton.classList.add('close-tab-button');
    closeTabButton.classList.add('answer-button');
    closeTabButton.innerHTML = "×";
    tab.appendChild(closeTabButton);

    const plusButton = document.createElement('button');
    plusButton.classList.add('plus-button');
    plusButton.classList.add('answer-button');
    plusButton.innerHTML = "+";
    tabBar.appendChild(plusButton);

    const windowButtons = document.createElement('div');
    windowButtons.classList.add('window-buttons');
    tabBar.appendChild(windowButtons);

    const hideButton = document.createElement('button');
    hideButton.classList.add('hide-button');
    hideButton.classList.add('answer-button');
    hideButton.innerHTML = "-";
    windowButtons.appendChild(hideButton);

    const minButton = document.createElement('button');
    minButton.classList.add('min-button');
    minButton.classList.add('answer-button');
    minButton.innerHTML = "❐";
    windowButtons.appendChild(minButton);

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.classList.add('answer-button');
    closeButton.innerHTML = "×";
    windowButtons.appendChild(closeButton);

    const navigationBar = document.createElement('div');
    navigationBar.classList.add('navigation-bar');
    browserBox.appendChild(navigationBar);

    const navContainer = document.createElement('div');
    navContainer.classList.add('nav-container');
    navigationBar.appendChild(navContainer);

    const backButton = document.createElement('button');
    backButton.setAttribute('id', 'back-button');
    backButton.classList.add('answer-button');
    backButton.innerHTML = "⇽";
    navContainer.appendChild(backButton);

    const forwardButton = document.createElement('button');
    forwardButton.classList.add('forward-button');
    forwardButton.classList.add('answer-button');
    forwardButton.innerHTML = "⇾";
    navContainer.appendChild(forwardButton);

    const refreshButton = document.createElement('button');
    refreshButton.setAttribute('id', 'refresh-button');
    refreshButton.classList.add('answer-button');
    refreshButton.innerHTML = "↺";
    navContainer.appendChild(refreshButton);

    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    navigationBar.appendChild(searchContainer);

    const searchInput = document.createElement('input');
    searchInput.type = "search";
    searchInput.classList.add('search-input');
    searchInput.placeholder = "www.website.com";
    searchContainer.appendChild(searchInput);

    const bookmarkButton = document.createElement('button');
    bookmarkButton.classList.add('bookmark-button');
    bookmarkButton.classList.add('answer-button');
    bookmarkButton.innerHTML = "☆";
    searchContainer.appendChild(bookmarkButton);

    const settingsContainer = document.createElement('div');
    settingsContainer.classList.add('settings-container');
    navigationBar.appendChild(settingsContainer);

    const accountButton = document.createElement('button');
    accountButton.classList.add('account-button');
    accountButton.classList.add('answer-button');
    navigationBar.appendChild(accountButton);

    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    menuButton.classList.add('answer-button');
    navigationBar.appendChild(menuButton);

    const webPage = document.createElement('img');
    webPage.classList.add('web-page');
    webPage.src = './icons/site-demo.png';
    browserBox.appendChild(webPage);
}

export function question3Select() {
    const body = document.getElementById("assessment-body");
    const infoBar = document.getElementById("info-bar");

    const nextButton = document.getElementById('next-button');
    const hintButton = document.getElementById('hint-button');

    const answerButtons = document.querySelectorAll('.answer-button');

    let selectedButton;

    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            answerButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');
            selectedButton = this;
        })
    })

    nextButton.addEventListener('click', function() {
        if (selectedButton.id === 'back-button') {
            userData.userScore += 5;
        }

        body.innerHTML = "";
        infoBar.innerHTML = "";
        loadToolbar4();
        loadQuestion4();
        question4Select();
    })

    hintButton.addEventListener('click', function() {
        const body = document.getElementById("assessment-body");
    
        const hintForm = document.createElement("form");
        hintForm.classList.add("hint-form");

        const hintText = document.createElement("p");
        hintText.innerHTML = "<span style='font-size: 24px;'><b>HINT</b></span><br>Remember that you need to go back.  Look for a symbol that points in the backwards direction.";
        hintText.classList.add("hint-text");

        const okayButton = document.createElement("button");
        okayButton.type = "button";
        okayButton.textContent = "OKAY";
        okayButton.classList.add("okay-button");

        hintForm.appendChild(hintText);
        hintForm.appendChild(okayButton);

        body.appendChild(hintForm);

        okayButton.addEventListener('click', function() {
            hintForm.remove();
        })
    })
}