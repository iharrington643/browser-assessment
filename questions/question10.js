import { userData } from '../main.js';
import { loadToolbar11, loadQuestion11, question11Select } from './question11.js';

export function loadToolbar10() {
    const infoBar = document.getElementById("info-bar");

    const hintButton = document.createElement('button');
    hintButton.setAttribute('id', 'hint-button');
    hintButton.innerHTML = "?";
    infoBar.appendChild(hintButton);

    const progressText = document.createElement('p');
    progressText.setAttribute('id', 'progress-text');
    progressText.innerHTML = "10 / 20";
    infoBar.appendChild(progressText);

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    infoBar.appendChild(progressBar);

    const innerBar = document.createElement('div');
    innerBar.setAttribute('id', 'inner-bar');
    innerBar.style.width = "50%";
    progressBar.appendChild(innerBar);

    const nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'next-button');
    nextButton.innerHTML = "⏭";
    infoBar.appendChild(nextButton);
}

export function loadQuestion10() {
    const body = document.getElementById("assessment-body");

    const questionTwoBox = document.createElement('div');
    questionTwoBox.classList.add('question-box');
    questionTwoBox.innerHTML = "10. Open the email app through your browser.";
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

    const appForm = document.createElement('form');
    appForm.classList.add('app-form');
    appForm.style.visibility = "hidden";
    browserBox.appendChild(appForm);

    const userAccContainer = document.createElement('div');
    userAccContainer.classList.add('user-acc-container');
    appForm.appendChild(userAccContainer);

    const userAccButton = document.createElement('button');
    userAccButton.setAttribute('id', 'user-acc-button');
    userAccButton.classList.add('app-button');
    userAccButton.type = 'button';
    userAccContainer.appendChild(userAccButton);

    const userAccText = document.createElement('p');
    userAccText.classList.add('user-acc-text');
    userAccText.innerHTML = "Account";
    userAccContainer.appendChild(userAccText);

    const gpsContainer = document.createElement('div');
    gpsContainer.classList.add('gps-container');
    appForm.appendChild(gpsContainer);

    const gpsButton = document.createElement('button');
    gpsButton.setAttribute('id', 'gps-button');
    gpsButton.classList.add('app-button');
    gpsButton.type = 'button';
    gpsContainer.appendChild(gpsButton);

    const gpsText = document.createElement('p');
    gpsText.classList.add('gps-text');
    gpsText.innerHTML = "MooMaps";
    gpsContainer.appendChild(gpsText);

    const emailContainer = document.createElement('div');
    emailContainer.classList.add('email-container');
    appForm.appendChild(emailContainer);

    const emailButton = document.createElement('button');
    emailButton.setAttribute('id', 'email-button');
    emailButton.classList.add('app-button');
    emailButton.type = 'button';
    emailContainer.appendChild(emailButton);

    const emailText = document.createElement('p');
    emailText.classList.add('email-text');
    emailText.innerHTML = "MooMail";
    emailContainer.appendChild(emailText);

    const calendarContainer = document.createElement('div');
    calendarContainer.classList.add('calendar-container');
    appForm.appendChild(calendarContainer);

    const calendarButton = document.createElement('button');
    calendarButton.setAttribute('id', 'calendar-button');
    calendarButton.classList.add('app-button');
    calendarButton.type = 'button';
    calendarContainer.appendChild(calendarButton);

    const calendarText = document.createElement('p');
    calendarText.classList.add('calendar-text');
    calendarText.innerHTML = "Calendar";
    calendarContainer.appendChild(calendarText);

    const photosContainer = document.createElement('div');
    photosContainer.classList.add('photos-container');
    appForm.appendChild(photosContainer);

    const photosButton = document.createElement('button');
    photosButton.setAttribute('id', 'photos-button');
    photosButton.classList.add('app-button');
    photosButton.type = 'button';
    photosContainer.appendChild(photosButton);

    const photosText = document.createElement('p');
    photosText.classList.add('photos-text');
    photosText.innerHTML = "Photos";
    photosContainer.appendChild(photosText);

    const mootubeContainer = document.createElement('div');
    mootubeContainer.classList.add('mootube-container');
    appForm.appendChild(mootubeContainer);

    const mootubeButton = document.createElement('button');
    mootubeButton.setAttribute('id', 'mootube-button');
    mootubeButton.classList.add('app-button');
    mootubeButton.type = 'button';
    mootubeContainer.appendChild(mootubeButton);

    const mootubeText = document.createElement('p');
    mootubeText.classList.add('mootube-text');
    mootubeText.innerHTML = 'MooTube';
    mootubeContainer.appendChild(mootubeText);

    nineDotsButton.addEventListener('click', function() {
        appForm.style.visibility = "visible";
    })

    userAccButton.addEventListener('click', function() {
        appForm.style.visibility = "hidden";
    })

    gpsButton.addEventListener('click', function() {
        appForm.style.visibility = "hidden";
    })

    emailButton.addEventListener('click', function() {
        appForm.style.visibility = "hidden";
    })

    calendarButton.addEventListener('click', function() {
        appForm.style.visibility = "hidden";
    })

    photosButton.addEventListener('click', function() {
        appForm.style.visibility = "hidden";
    })

    mootubeButton.addEventListener('click', function() {
        appForm.style.visibility = "hidden";
    })
}

export function question10Select() {
    const body = document.getElementById("assessment-body");
    const infoBar = document.getElementById("info-bar");

    const nextButton = document.getElementById('next-button');
    const hintButton = document.getElementById('hint-button');

    const answerButtons = document.querySelectorAll('.answer-button');
    const appButtons = document.querySelectorAll('.app-button');

    let selectedApp;

    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            answerButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');
        })
    })

    appButtons.forEach(button => {
        button.addEventListener('click', function() {
            appButtons.forEach(btn => btn.style.backgroundColor = 'transparent')

            selectedApp = this;
            this.style.backgroundColor = 'rgb(227, 227, 227)';
        })
    })

    nextButton.addEventListener('click', function() {
        if (selectedApp && selectedApp.id === 'email-button') {
            userData.userScore += 5;
        }

        body.innerHTML = "";
        infoBar.innerHTML = "";
        loadToolbar11();
        loadQuestion11();
        question11Select();
    })

    hintButton.addEventListener('click', function() {
        const body = document.getElementById("assessment-body");
    
        const hintForm = document.createElement("form");
        hintForm.classList.add("hint-form");

        const hintText = document.createElement("p");
        hintText.innerHTML = "<span style='font-size: 24px;'><b>HINT</b></span><br>There is a certain menu button that you can click to navigate through important apps/sites.  When you click it, a box should pop up.";
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