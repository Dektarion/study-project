const mobileMenuIcon = document.querySelector('.hamburger');
const mobileMenuIconLine = document.querySelectorAll('.hamburger__line');
const navMenu = document.querySelector('.nav-menu__list');

const openMobileMenu = () => {
  mobileMenuIcon.classList.toggle('hamburger_active');
  mobileMenuIconLine.forEach((elem) => {
    elem.classList.toggle('hamburger__line_active');
  })
  navMenu.classList.toggle('nav-menu__list_active');
}

export {mobileMenuIcon, openMobileMenu};