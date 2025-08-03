window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    const navbar = document.querySelector('.navbar');
    const heroProject = document.querySelector('.heroProject');


    if (hero) hero.classList.add('visible');
    if (navbar) navbar.classList.add('visible');
    if (heroProject) heroProject.classList.add('visible');
});