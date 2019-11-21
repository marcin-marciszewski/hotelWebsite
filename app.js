const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector(".links");
const showcaseEl = document.querySelector("#showcase");
const aboutInfoEl = document.getElementById("about-info");
const contactFormEl = document.getElementById("contact-form");
const hamburgerBarsEls = document.getElementsByClassName("bar");


function toggleNav() {
    navTriggerEl.addEventListener("click", function () {
        if (showcaseEl) {
            showcaseEl.classList.toggle("shift");
        }
        if (aboutInfoEl) {
            aboutInfoEl.classList.toggle("shift");
        }
        if (contactFormEl) {
            contactFormEl.classList.toggle("shift");
        }
        navEl.classList.toggle("open");
        animateHamburber();

    })
}

function animateHamburber() {
    for (let bar of hamburgerBarsEls) {
        bar.classList.toggle("change");
    }
}
toggleNav();