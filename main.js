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

    startButton.addEventListener('click', function() {
        body.innerHTML = "";
        loadQuestion1();
    })
}

function loadQuestion1() {
    const body = document.getElementById("assessment-body");

    const questionOneBox = document.createElement('div');
    questionOneBox.classList.add('question-box');
    questionOneBox.innerHTML = "1. Select the button to refresh the page.";
    body.appendChild(questionOneBox);

    const browserBox = document.createElement("div");
    browserBox.classList.add('browser-box');
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
    closeTabButton.innerHTML = "×";
    tab.appendChild(closeTabButton);

    const plusButton = document.createElement('button');
    plusButton.classList.add('plus-button');
    plusButton.innerHTML = "+";
    tabBar.appendChild(plusButton);

    const windowButtons = document.createElement('div');
    windowButtons.classList.add('window-buttons');
    tabBar.appendChild(windowButtons);

    const hideButton = document.createElement('button');
    hideButton.classList.add('hide-button');
    hideButton.innerHTML = "-";
    windowButtons.appendChild(hideButton);

    const minButton = document.createElement('button');
    minButton.classList.add('min-button');
    minButton.innerHTML = "❐";
    windowButtons.appendChild(minButton);

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = "×";
    windowButtons.appendChild(closeButton);

    const navigationBar = document.createElement('div');
    navigationBar.classList.add('navigation-bar');
    browserBox.appendChild(navigationBar);

    const navContainer = document.createElement('div');
    navContainer.classList.add('nav-container');
    navigationBar.appendChild(navContainer);

    const backButton = document.createElement('button');
    backButton.classList.add('back-button');
    backButton.innerHTML = "⇽";
    navContainer.appendChild(backButton);

    const forwardButton = document.createElement('button');
    forwardButton.classList.add('forward-button');
    forwardButton.innerHTML = "⇾";
    navContainer.appendChild(forwardButton);

    const refreshButton = document.createElement('button');
    refreshButton.setAttribute('id', 'refresh-button');
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
    bookmarkButton.classList.add('bookmark-button');
    bookmarkButton.innerHTML = "☆";
    searchContainer.appendChild(bookmarkButton);

    const settingsContainer = document.createElement('div');
    settingsContainer.classList.add('settings-container');
    navigationBar.appendChild(settingsContainer);

    const accountButton = document.createElement('button');
    accountButton.classList.add('account-button');
    navigationBar.appendChild(accountButton);

    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    navigationBar.appendChild(menuButton);

    const moogleBar = document.createElement('div');
    moogleBar.classList.add('moogle-bar');
    browserBox.appendChild(moogleBar);

    const nineDotsButton = document.createElement('button');
    nineDotsButton.classList.add('nine-dots-button');
    moogleBar.appendChild(nineDotsButton);

    const accountDtlButton = document.createElement('button');
    accountDtlButton.classList.add('account-dtl-button');
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
    searchInput2.classList.add('search-input2');
    searchInput2.placeholder = "Search Moogle or type a URL";
    searchContainer2.appendChild(searchInput2);

    const micButton = document.createElement('button');
    micButton.classList.add('mic-button');
    searchContainer2.appendChild(micButton);

    const imgSearchButton = document.createElement('button');
    imgSearchButton.classList.add('img-search-button');
    searchContainer2.appendChild(imgSearchButton);

    const addShortcutButton = document.createElement('button');
    addShortcutButton.classList.add('add-shortcut-button');
    addShortcutButton.innerHTML = '+';
    moogleSearchContainer.appendChild(addShortcutButton);

    const customizeBar = document.createElement('div');
    customizeBar.classList.add('customize-bar');
    browserBox.appendChild(customizeBar);

    const customizeButton = document.createElement('button');
    customizeButton.classList.add('customize-button');
    customizeButton.innerHTML = "✎ Customize"
    customizeBar.appendChild(customizeButton);

    question1Select();
}

function question1Select() {
    const buttons = document.querySelectorAll('button');
    const refreshButton = document.getElementById('refresh-button');

    let selectedButton;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');
            selectedButton = this;
        })
    })
}

loadIntroForm();