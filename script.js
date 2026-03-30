
// THEME TOGGLE + SAVE MODE

const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    toggleBtn.innerHTML = "☀️";
}else{
    toggleBtn.innerHTML = "🌙";
}

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        toggleBtn.innerHTML = "☀️";
        localStorage.setItem("theme","light");
    }else{
        toggleBtn.innerHTML = "🌙";
        localStorage.setItem("theme","dark");
    }

});


// SMOOTH SCROLL NAVBAR

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior:"smooth"
        });

    });

});


// ACTIVE NAV LINK ON SCROLL

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + currentSection){
            link.classList.add("active");
        }

    });

});


// SCROLL TO TOP BUTTON

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// CONTACT FORM SUBMIT

const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = this.querySelector("input[name='name']").value;

    alert("Thank you " + name + "! Your message has been sent successfully.");

    this.reset();

});


// LOGO CLICK → HOME

const logo = document.querySelector(".logo img");

logo.addEventListener("click", () => {

    document.querySelector("#home").scrollIntoView({
        behavior:"smooth"
    });

});


// HERO BUTTON SCROLL TO ABOUT

const heroBtn = document.querySelector(".btn");

heroBtn.addEventListener("click", () => {

    document.querySelector("#about").scrollIntoView({
        behavior:"smooth"
    });

});
