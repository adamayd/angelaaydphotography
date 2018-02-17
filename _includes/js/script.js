let navBar = document.querySelector('nav');

function navBG() {
  if (window.scrollY > window.innerHeight / 2) {
    console.log(navBar);
    navBar.classList.add('js-nav__section-filled');
  } else {
    console.log('Remove class');
    navBar.classList.remove('js-nav__section-filled');
  }
}

window.addEventListener('scroll', navBG);
