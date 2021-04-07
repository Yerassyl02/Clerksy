const nav = document.querySelector('.nav');
window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;

    if(scrollPos > 450) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
})

const menuBtn = document.querySelector('.menu-btn');
const navContact = document.querySelector('.nav_contact')

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('menu_burger-open');
        navContact.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('menu_burger-open');
        navContact.classList.remove('active');
        menuOpen = false;
    }
})