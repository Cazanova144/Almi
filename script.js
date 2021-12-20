const hamburgerMenuDivEl = document.querySelector('#hamburger-menu-div');
const hamburgerMenuEl = document.querySelector('#hamburger-menu');
const hamburgerNavEl = document.querySelector('#hamburger-nav');
const searchDesktopEl = document.querySelector('.search-desktop');
const searchMobileEl = document.querySelector('.search-mobile');
const bodyEl = document.querySelector('body');

let menuOpen = false;

hamburgerMenuDivEl.addEventListener('click', e => {
    if (!menuOpen) {
        hamburgerNavEl.classList.remove('d-none');

        hamburgerMenuDivEl.innerHTML = `<img src="Assets/Img/cross mark icon.png" alt="" id="hamburger-menu">`;

        menuOpen = true;
    } else {
        hamburgerNavEl.classList.add('d-none');

        hamburgerMenuDivEl.innerHTML = `<img src="Assets/Img/hamburger menu icon.png" alt="" id="hamburger-menu">`;

        menuOpen = false;
    }
});

let searchBarOpen = false;

searchDesktopEl.addEventListener('click', e => {
    if (!searchBarOpen) {
        searchDesktopEl.innerHTML = `<input type="search" name="" id="">`;

        searchBarOpen = true;
    } 
});


searchMobileEl.addEventListener('click', e => {
    if (!searchBarOpen) {
        searchMobileEl.innerHTML = `<input type="search" name="" id="">`;

        searchBarOpen = true;
    }
});