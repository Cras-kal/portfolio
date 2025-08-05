window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    const navbar = document.querySelector('.navbar');
    const heroProject = document.querySelector('.heroProject');
    const heroEditor = document.querySelector('.heroEditor');


    if (hero) hero.classList.add('visible');
    if (navbar) navbar.classList.add('visible');
    if (heroProject) heroProject.classList.add('visible');
    if (heroEditor) heroEditor.classList.add('visible');
});