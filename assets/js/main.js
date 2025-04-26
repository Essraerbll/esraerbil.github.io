/* ===== MENU SHOW ===== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/* ===== REMOVE MENU MOBILE AFTER CLICK ===== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              navMenuLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navMenuLink.classList.add('active-link');
        } else {
            navMenuLink.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* ===== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1500,
    delay: 200,
    reset: true 
});

// Home
sr.reveal('.home__data', {});
sr.reveal('.home__img', { delay: 300 });
sr.reveal('.home__social-icon', { interval: 200 });

// About
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 300 });
sr.reveal('.about__text', { delay: 400 });

// Skills
sr.reveal('.skills__grid', { interval: 200 });

// Projects
sr.reveal('.projects__grid', { interval: 200 });
sr.reveal('.project__card', { interval: 200 });

// Experience
sr.reveal('.experience__timeline', { interval: 200 });
sr.reveal('.experience__card', { interval: 200 });

// Footer
sr.reveal('.footer', {});
