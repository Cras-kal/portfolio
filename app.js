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


// Picture switcher when click hero picture
const heroImg = document.getElementById("heroIndexPic");
const switchGradPic1 = () => heroImg.setAttribute("src", "images/gradPic.JPG");
const switchGradPic2 = () => heroImg.setAttribute("src", "images/gradPic2.JPG");
let state = true;

if (heroImg){
    function changeImg(){
        if (state === false){
            state = !state;
            return switchGradPic1();

        } else if (state === true) {
            state = !state;
            return switchGradPic2();
        }
    }
    heroImg.addEventListener("click", changeImg);
}

//alert underdeveloping clicks
const underCons = document.querySelectorAll(".underCons");

underCons.forEach(underCons => {
    underCons.addEventListener("click", () => alert("🚧 This section is still in progress. Thank you for your patience! 🚧"));
});

