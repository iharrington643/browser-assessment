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
    refreshButton.classList.add('refresh-button');
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
}

loadIntroForm();