import { userData } from '../main.js';
import { loadToolbar6, loadQuestion6, question6Select } from './question6.js';

export function loadToolbar5() {
    const infoBar = document.getElementById("info-bar");

    const hintButton = document.createElement('button');
    hintButton.setAttribute('id', 'hint-button');
    hintButton.innerHTML = "?";
    infoBar.appendChild(hintButton);

    const progressText = document.createElement('p');
    progressText.setAttribute('id', 'progress-text');
    progressText.innerHTML = "5 / 20";
    infoBar.appendChild(progressText);

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    infoBar.appendChild(progressBar);

    const innerBar = document.createElement('div');
    innerBar.setAttribute('id', 'inner-bar');
    innerBar.style.width = "25%";
    progressBar.appendChild(innerBar);

    const nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'next-button');
    nextButton.innerHTML = "⏭";
    infoBar.appendChild(nextButton);
}

export function loadQuestion5() {
    const body = document.getElementById("assessment-body");

    const questionFiveBox = document.createElement('div');
    questionFiveBox.classList.add('question-box');
    questionFiveBox.innerHTML = "5. Bookmark the current page with the name 'Hotel'.";
    body.appendChild(questionFiveBox);

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
    tabText.innerHTML = "The Grand Hotel";
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
    searchInput.placeholder = "thegrand.com";
    searchContainer.appendChild(searchInput);

    const bookmarkButton = document.createElement('button');
    bookmarkButton.setAttribute('id', 'bookmark-button');
    bookmarkButton.classList.add('answer-button');
    bookmarkButton.innerHTML = "☆";
    searchContainer.appendChild(bookmarkButton);

    const bookmarkForm = document.createElement('form');
    bookmarkForm.classList.add('bookmark-form');
    bookmarkForm.style.visibility = "hidden";
    browserBox.appendChild(bookmarkForm);

    const bookmarkInput = document.createElement('input');
    bookmarkInput.type = "text";
    bookmarkInput.setAttribute('id', 'bookmark-input');
    bookmarkInput.placeholder = "Name your bookmark...";
    bookmarkForm.appendChild(bookmarkInput);

    const removeBookmarkBtn = document.createElement('button');
    removeBookmarkBtn.type = 'button';
    removeBookmarkBtn.setAttribute('id', 'remove-bookmark-btn');
    removeBookmarkBtn.innerHTML = 'Remove';
    bookmarkForm.appendChild(removeBookmarkBtn);

    const saveBookmarkBtn = document.createElement('button');
    saveBookmarkBtn.type = 'button';
    saveBookmarkBtn.setAttribute('id', 'save-bookmark-btn');
    saveBookmarkBtn.innerHTML = 'Save';
    bookmarkForm.appendChild(saveBookmarkBtn);

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

    const travelPage = document.createElement('div');
    travelPage.classList.add('travel-page');
    browserBox.appendChild(travelPage);

    bookmarkButton.addEventListener('click', function() {
        bookmarkForm.style.visibility = "visible";
    })

    saveBookmarkBtn.addEventListener('click', function() {
        bookmarkForm.style.visibility = 'hidden';
    })

    removeBookmarkBtn.addEventListener('click', function() {
        bookmarkForm.style.visibility = 'hidden';
        bookmarkInput.value = '';
    })

    bookmarkInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') { 
            event.preventDefault();
        }
    });

    const buttons = document.querySelectorAll('button');
    const buttonClickSound = new Audio('../sounds/mouse-click.mp3');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttonClickSound.currentTime = 0;
            buttonClickSound.play();
        })
    })
}

export function question5Select() {
    const body = document.getElementById("assessment-body");
    const infoBar = document.getElementById("info-bar");

    const nextButton = document.getElementById('next-button');
    const hintButton = document.getElementById('hint-button');

    const answerButtons = document.querySelectorAll('.answer-button');
    const bookmarkInput = document.getElementById('bookmark-input');

    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            answerButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');
        })
    })

    nextButton.addEventListener('click', function() {
        if (bookmarkInput.value.toLowerCase() === 'hotel') {
            userData.userScore += 5;
        }

        body.innerHTML = "";
        infoBar.innerHTML = "";
        loadToolbar6();
        loadQuestion6();
        question6Select();
    })

    hintButton.addEventListener('click', function() {
        const body = document.getElementById("assessment-body");
    
        const hintForm = document.createElement("form");
        hintForm.classList.add("hint-form");

        const hintText = document.createElement("p");
        hintText.innerHTML = "<span style='font-size: 24px;'><b>HINT</b></span><br>Think of bookmarking a page like marking it as your favorite.  Also, you'll know if you clicked the right button if a text input box pops up.";
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