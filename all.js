const menuBtn = document.querySelector('.btn_menu');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

const w_with = window.innerWidth;
const w_height = window.innerHeight;
const size = w_with/w_height;
const control = document.querySelectorAll('.control');
// const title = document.querySelector('.title');
// const title_sub = document.querySelector('.title_sub');
// const pic = document.querySelector('.mobile-pic');
// const btn_vote = document.querySelector('.btn_vote');

let showMenu = false;

console.log(size);
console.log(control);
if (w_with < 768) {
  if(size > 0.569) {
    control.forEach(item => item.classList.remove('long'));
    control.forEach(item => item.classList.add('short'));
  } else {
    control.forEach(item => item.classList.remove('short'));
    control.forEach(item => item.classList.add('long'));
  }
} else {
  control.forEach(item => item.classList.remove('long'));
  control.forEach(item => item.classList.remove('short'));
}

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}