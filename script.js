// =======================
// MENU MOBILE
// =======================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// =======================
// SCROLL ANIMATION
// =======================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll(){

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){
            el.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// =======================
// TYPING EFFECT
// =======================

const texts = [
    "Mobile Developer",
    "Web Developer",
    "UI/UX Design"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function typing(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(typing, 1500);

    }else{
        setTimeout(typing, 100);
    }

})();

// =======================
// SCROLL TO TOP
// =======================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});