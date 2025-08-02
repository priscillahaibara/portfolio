/* ====== SHOW MENU ======  */

const toggle = document.querySelector('.header__toggle')
const nav = document.querySelector('.header__nav')

function showMenu() {
    toggle.addEventListener('click', () => {
        /* Add show-menu class to nav menu */
        nav.classList.toggle('show-menu');

        /* Add show-icon to show and hide the menu icon */
        toggle.classList.toggle('show-icon')
    })
}

showMenu();


