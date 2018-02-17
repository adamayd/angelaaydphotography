// var navBar = document.querySelector('nav');

function navBG() {
  if (window.scrollY > window.innerHeight / 2) {
    document.querySelector('.nav__section').classList.add('js-nav__section-filled');
    document.querySelectorAll('.nav__link').forEach(link => link.classList.add('js-nav__link-dark'));
  } else {
    document.querySelector('.nav__section').classList.remove('js-nav__section-filled');
    document.querySelectorAll('.nav__link').forEach(link => link.classList.remove('js-nav__link-dark'));
  }
}

window.addEventListener('scroll', navBG);
