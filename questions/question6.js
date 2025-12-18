import { userData } from '../main.js';
import { loadToolbar7, loadQuestion7, question7Select } from './question7.js';

export function loadToolbar6() {
    const infoBar = document.getElementById("info-bar");

    const hintButton = document.createElement('button');
    hintButton.setAttribute('id', 'hint-button');
    hintButton.innerHTML = "?";
    infoBar.appendChild(hintButton);

    const progressText = document.createElement('p');
    progressText.setAttribute('id', 'progress-text');
    progressText.innerHTML = "6 / 20";
    infoBar.appendChild(progressText);

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    infoBar.appendChild(progressBar);

    const innerBar = document.createElement('div');
    innerBar.setAttribute('id', 'inner-bar');
    innerBar.style.width = "30%";
    progressBar.appendChild(innerBar);

    const nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'next-button');
    nextButton.innerHTML = "⇥";
    infoBar.appendChild(nextButton);
}

export function loadQuestion6() {
    const body = document.getElementById("assessment-body");

    const questionFourBox = document.createElement('div');
    questionFourBox.classList.add('question-box');
    questionFourBox.innerHTML = "6. Enter the address 'https://bluebox.net' in the <b>address bar</b>.";
    body.appendChild(questionFourBox);

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
    plusButton.setAttribute('id', 'plus-button');
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
    minButton.setAttribute('id', 'min-button');
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
    accountButton.setAttribute('id', 'account-button');
    accountButton.classList.add('answer-button');
    navigationBar.appendChild(accountButton);

    const menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu-button');
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
    accountDtlButton.setAttribute('id', 'account-dtl-button');
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

    const buttons = document.querySelectorAll('button');
    const buttonClickSound = new Audio('./sounds/mouse-click.mp3');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttonClickSound.currentTime = 0;
            buttonClickSound.play();
        })
    })
}

export function question6Select() {
    const body = document.getElementById("assessment-body");
    const infoBar = document.getElementById("info-bar");

    const searchInput = document.getElementById('search-input')

    const nextButton = document.getElementById('next-button');
    const hintButton = document.getElementById('hint-button');

    const answerButtons = document.querySelectorAll('.answer-button');

    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            answerButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');
        })
    })

    nextButton.addEventListener('click', function() {
        if (searchInput.value.toLowerCase() === 'https://bluebox.net') {
            userData.userScore += 5;
        }

        body.innerHTML = "";
        infoBar.innerHTML = "";
        loadToolbar7();
        loadQuestion7();
        question7Select();
    })

    hintButton.addEventListener('click', function() {
        const body = document.getElementById("assessment-body");
    
        const hintForm = document.createElement("form");
        hintForm.classList.add("hint-form");

        const hintText = document.createElement("p");
        hintText.innerHTML = "<span style='font-size: 24px;'><b>HINT</b></span><br>Remember that the search bar and the address bar are two different things.  Also, you have to type in the exact same address!!";
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