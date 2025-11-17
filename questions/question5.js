import { userData } from '../main.js';

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
    questionFiveBox.innerHTML = "5. Bookmark the current page with the name 'Wiki'.";
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
    tabText.innerHTML = "New Tab";
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
    searchInput.placeholder = "Search Moogle or type a URL";
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
}

export function question5Select() {
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
        if (selectedButton.id === 'add-shortcut-button') {
            userData.userScore += 5;
        }

        body.innerHTML = "";
        infoBar.innerHTML = "";
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