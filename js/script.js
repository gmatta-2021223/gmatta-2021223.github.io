const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.remove('background-navbar1');
    navbar.classList.add('background-navbar2');
  } else {
    navbar.classList.remove('background-navbar2');
    navbar.classList.add('background-navbar1');
  }
});