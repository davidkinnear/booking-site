// Selectors
const header = document.querySelector('.header');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function() {
  header.classList.toggle('menu-open');
});

window.addEventListener('scroll', function() {
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('active', windowPosition);
});


window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin: 'left',
    duration: 1000,
    distance: '25rem', 
    delay: 300 
});

sr.reveal('.animate-right',{
    origin: 'right',
    duration: 1000,
    distance: '25rem', 
    delay: 600 
});

sr.reveal('.animate-top',{
    origin: 'top',
    duration: 1000,
    distance: '25rem', 
    delay: 600 
});

sr.reveal('.animate-bottom',{
    origin: 'bottom',
    duration: 1000,
    distance: '25rem', 
    delay: 600 
});
