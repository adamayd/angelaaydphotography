var navBar = document.querySelector('nav');

function navBG() {
  if (window.scrollY > window.innerHeight / 2) {
    console.log(document.querySelector('.nav__section'));
    document.querySelector('.nav__section').classList.add('js-nav__section-filled');
  } else {
    console.log('Remove class');
    document.querySelector('.nav__section').classList.remove('js-nav__section-filled');
  }
}

window.addEventListener('scroll', navBG);
