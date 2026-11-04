const hamMenu = document.querySelector('.menu-button');
const hamMenuImg = document.getElementById('menu-button-img');
const hamMenuAbout = document.getElementById('ham-preview-link');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    toggleHamMenu();
});

hamMenuAbout.addEventListener('click', () => {
    toggleHamMenu();
});

function toggleHamMenu() {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');

    if (offScreenMenu.classList.contains('active')) {
        hamMenuImg.src = "media/icons/x-icon.svg";
    }
    else {
        hamMenuImg.src = "media/icons/hamburger-icon.svg";
    }
}