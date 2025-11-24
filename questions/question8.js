import { userData } from '../main.js';
import { loadToolbar9, loadQuestion9, question9Select } from './question9.js';

export function loadToolbar8() {
    const infoBar = document.getElementById("info-bar");

    const hintButton = document.createElement('button');
    hintButton.setAttribute('id', 'hint-button');
    hintButton.innerHTML = "?";
    infoBar.appendChild(hintButton);

    const progressText = document.createElement('p');
    progressText.setAttribute('id', 'progress-text');
    progressText.innerHTML = "8 / 20";
    infoBar.appendChild(progressText);

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    infoBar.appendChild(progressBar);

    const innerBar = document.createElement('div');
    innerBar.setAttribute('id', 'inner-bar');
    innerBar.style.width = "40%";
    progressBar.appendChild(innerBar);

    const nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'next-button');
    nextButton.innerHTML = "⏭";
    infoBar.appendChild(nextButton);
}

export function loadQuestion8() {
    const body = document.getElementById("assessment-body");

    const questionTwoBox = document.createElement('div');
    questionTwoBox.classList.add('question-box');
    questionTwoBox.innerHTML = "8. Change your browser's theme color to blue.";
    body.appendChild(questionTwoBox);

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
    tabText.innerHTML = "New Tab";
    tab.appendChild(tabText);

    const closeTabButton = document.createElement('button');
    closeTabButton.setAttribute('id', 'close-tab-button');
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
    hideButton.setAttribute('id', 'hide-button');
    hideButton.classList.add('answer-button');
    hideButton.innerHTML = "-";
    windowButtons.appendChild(hideButton);

    const minButton = document.createElement('button');
    minButton.classList.add('min-button');
    minButton.classList.add('answer-button');
    minButton.innerHTML = "❐";
    windowButtons.appendChild(minButton);

    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'close-button');
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
    searchInput.setAttribute('id', 'search-input');
    searchInput.placeholder = "Search Moogle or type a URL";
    searchContainer.appendChild(searchInput);

    const bookmarkButton = document.createElement('button');
    bookmarkButton.setAttribute('id', 'bookmark-button');
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

    const moogleBar = document.createElement('div');
    moogleBar.classList.add('moogle-bar');
    browserBox.appendChild(moogleBar);

    const nineDotsButton = document.createElement('button');
    nineDotsButton.classList.add('nine-dots-button');
    nineDotsButton.classList.add('answer-button');
    moogleBar.appendChild(nineDotsButton);

    const accountDtlButton = document.createElement('button');
    accountDtlButton.classList.add('account-dtl-button');
    accountDtlButton.classList.add('answer-button');
    moogleBar.appendChild(accountDtlButton);

    const mooglePage = document.createElement('div');
    mooglePage.classList.add('moogle-page');
    browserBox.appendChild(mooglePage);

    const moogleSearchContainer = document.createElement('div');
    moogleSearchContainer.classList.add('moogle-search-container');
    mooglePage.appendChild(moogleSearchContainer);

    const moogleLogo = document.createElement('img');
    moogleLogo.classList.add('moogle-logo');
    moogleLogo.src = "./icons/moogle-logo.png";
    moogleSearchContainer.appendChild(moogleLogo);

    const searchContainer2 = document.createElement('div');
    searchContainer2.classList.add('search-container2');
    moogleSearchContainer.appendChild(searchContainer2);

    const searchInput2 = document.createElement('input');
    searchInput2.type = "search";
    searchInput2.setAttribute('id', 'search-input2');
    searchInput2.placeholder = "Search Moogle or type a URL";
    searchContainer2.appendChild(searchInput2);

    const micButton = document.createElement('button');
    micButton.classList.add('mic-button');
    micButton.classList.add('answer-button');
    searchContainer2.appendChild(micButton);

    const imgSearchButton = document.createElement('button');
    imgSearchButton.classList.add('img-search-button');
    imgSearchButton.classList.add('answer-button');
    searchContainer2.appendChild(imgSearchButton);

    const addShortcutButton = document.createElement('button');
    addShortcutButton.setAttribute('id', 'add-shortcut-button');
    addShortcutButton.classList.add('answer-button');
    addShortcutButton.innerHTML = '+';
    moogleSearchContainer.appendChild(addShortcutButton);

    const customizeBar = document.createElement('div');
    customizeBar.classList.add('customize-bar');
    browserBox.appendChild(customizeBar);

    const customizeButton = document.createElement('button');
    customizeButton.classList.add('customize-button');
    customizeButton.classList.add('answer-button');
    customizeButton.innerHTML = "✎ Customize";
    customizeBar.appendChild(customizeButton);

    const customizeForm = document.createElement('form');
    customizeForm.classList.add('customize-form');
    customizeForm.style.visibility = "hidden";
    browserBox.appendChild(customizeForm);

    const customizeCaption = document.createElement('div');
    customizeCaption.innerHTML = "Appearance";
    customizeCaption.classList.add('customize-caption');
    customizeForm.appendChild(customizeCaption);

    const lightModeBtn = document.createElement('button');
    lightModeBtn.type = 'button';
    lightModeBtn.setAttribute('id', 'light-mode-btn');
    lightModeBtn.classList.add('answer-button');
    lightModeBtn.innerHTML = '☼ Light';
    customizeForm.appendChild(lightModeBtn);

    const darkModeBtn = document.createElement('button');
    darkModeBtn.type = 'button';
    darkModeBtn.setAttribute('id', 'dark-mode-btn');
    darkModeBtn.classList.add('answer-button');
    darkModeBtn.innerHTML = '☾ Dark';
    customizeForm.appendChild(darkModeBtn);

    const themeBtnContainer = document.createElement('div');
    themeBtnContainer.setAttribute('id', 'theme-btn-container');
    customizeForm.appendChild(themeBtnContainer);

    const pinkThemeBtn = document.createElement('button');
    pinkThemeBtn.type = 'button';
    pinkThemeBtn.setAttribute('id', 'pink-theme-btn');
    pinkThemeBtn.classList.add('answer-button');
    pinkThemeBtn.classList.add('theme-button');
    themeBtnContainer.appendChild(pinkThemeBtn);

    const orangeThemeBtn = document.createElement('button');
    orangeThemeBtn.type = 'button';
    orangeThemeBtn.setAttribute('id', 'orange-theme-btn');
    orangeThemeBtn.classList.add('answer-button');
    orangeThemeBtn.classList.add('theme-button');
    themeBtnContainer.appendChild(orangeThemeBtn);

    const yellowThemeBtn = document.createElement('button');
    yellowThemeBtn.type = 'button';
    yellowThemeBtn.setAttribute('id', 'yellow-theme-btn');
    yellowThemeBtn.classList.add('answer-button');
    yellowThemeBtn.classList.add('theme-button');
    themeBtnContainer.appendChild(yellowThemeBtn);

    const greenThemeBtn = document.createElement('button');
    greenThemeBtn.type = 'button';
    greenThemeBtn.setAttribute('id', 'green-theme-btn');
    greenThemeBtn.classList.add('answer-button');
    greenThemeBtn.classList.add('theme-button');
    themeBtnContainer.appendChild(greenThemeBtn);

    const blueThemeBtn = document.createElement('button');
    blueThemeBtn.type = 'button';
    blueThemeBtn.setAttribute('id', 'blue-theme-btn');
    blueThemeBtn.classList.add('answer-button');
    blueThemeBtn.classList.add('theme-button');
    themeBtnContainer.appendChild(blueThemeBtn);

    const purpleThemeBtn = document.createElement('button');
    purpleThemeBtn.type = 'button';
    purpleThemeBtn.setAttribute('id', 'purple-theme-btn');
    purpleThemeBtn.classList.add('answer-button');
    purpleThemeBtn.classList.add('theme-button');
    themeBtnContainer.appendChild(purpleThemeBtn);

    const saveThemeButton = document.createElement('button');
    saveThemeButton.type = 'button';
    saveThemeButton.setAttribute('id', 'save-theme-button');
    saveThemeButton.innerHTML = 'Save';
    customizeForm.appendChild(saveThemeButton);

    customizeButton.addEventListener('click', function() {
        customizeForm.style.visibility = "visible";
    })

    saveThemeButton.addEventListener('click', function() {
        customizeForm.style.visibility = "hidden";
    })

    pinkThemeBtn.addEventListener('click', function() {
        tabBar.style.backgroundColor = "pink";
    })

    orangeThemeBtn.addEventListener('click', function() {
        tabBar.style.backgroundColor = "rgb(255, 203, 157)";
    })

    yellowThemeBtn.addEventListener('click', function() {
        tabBar.style.backgroundColor = "rgb(255, 241, 189)";
    })

    greenThemeBtn.addEventListener('click', function() {
        tabBar.style.backgroundColor = "rgb(200, 227, 173)";
    })

    blueThemeBtn.addEventListener('click', function() {
        tabBar.style.backgroundColor = "lightblue";
    })

    purpleThemeBtn.addEventListener('click', function() {
        tabBar.style.backgroundColor = "rgb(203, 203, 255)";
    })
}

export function question8Select() {
    const body = document.getElementById("assessment-body");
    const infoBar = document.getElementById("info-bar");

    const nextButton = document.getElementById('next-button');
    const hintButton = document.getElementById('hint-button');

    const answerButtons = document.querySelectorAll('.answer-button');
    const themeButtons = document.querySelectorAll('.theme-button');

    let selectedTheme;

    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            answerButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');
        })
    })

    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            themeButtons.forEach(btn => btn.style.opacity = '0.5');

            selectedTheme = this;
            this.style.opacity = '1';
        })
    })

    nextButton.addEventListener('click', function() {
        if (selectedTheme && selectedTheme.id === 'blue-theme-btn') {
            userData.userScore += 5;
        }

        body.innerHTML = "";
        infoBar.innerHTML = "";
        loadToolbar9();
        loadQuestion9();
        question9Select();
    })

    hintButton.addEventListener('click', function() {
        const body = document.getElementById("assessment-body");
    
        const hintForm = document.createElement("form");
        hintForm.classList.add("hint-form");

        const hintText = document.createElement("p");
        hintText.innerHTML = "<span style='font-size: 24px;'><b>HINT</b></span><br>Remember that a tab and a window are two separate things.  Closing out of a tab will not have the same effect as closing a window.";
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