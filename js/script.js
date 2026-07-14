/*=====================================================
    STUDENT PORTFOLIO WEBSITE
    COS 106 Practical Project
    File: js/script.js
======================================================*/

// =====================================
// Display Greeting Based on Time
// =====================================

function displayGreeting() {

    const greeting = document.createElement("div");

    greeting.id = "greetingBox";

    const hour = new Date().getHours();

    let message = "";

    if (hour < 12) {

        message = "☀️ Good Morning! Welcome to my Student Portfolio.";

    }

    else if (hour < 18) {

        message = "🌞 Good Afternoon! Welcome to my Student Portfolio.";

    }

    else {

        message = "🌙 Good Evening! Welcome to my Student Portfolio.";

    }

    greeting.innerHTML = message;

    greeting.style.background = "#1565c0";
    greeting.style.color = "white";
    greeting.style.padding = "15px";
    greeting.style.textAlign = "center";
    greeting.style.fontWeight = "bold";
    greeting.style.fontSize = "18px";

    document.body.insertBefore(greeting, document.body.firstChild);

}

displayGreeting();


// =====================================
// Current Year in Footer
// =====================================

const footer = document.querySelector("footer p");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML =
        `© ${year} Alfred Joshua`;

}



// =====================================
// Highlight Active Navigation Link
// =====================================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});



// =====================================
// Back To Top Button
// =====================================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#1565c0";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 8px 20px rgba(0,0,0,.3)";
topButton.style.transition = ".3s";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// =====================================
// Hero Image Hover Effect
// =====================================

const profileImage = document.querySelector(".hero-image img");

if (profileImage) {

    profileImage.addEventListener("mouseenter", function () {

        profileImage.style.transform = "scale(1.08) rotate(2deg)";

    });

    profileImage.addEventListener("mouseleave", function () {

        profileImage.style.transform = "scale(1) rotate(0deg)";

    });

}



// =====================================
// Skill Animation
// =====================================

const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {

    skill.addEventListener("click", function () {

        alert("Skill Selected: " + this.innerText);

    });

});



// =====================================
// Information Cards Animation
// =====================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseover", function () {

        this.style.background = "#1565c0";

        this.style.color = "white";

    });

    card.addEventListener("mouseout", function () {

        this.style.background = "white";

        this.style.color = "#333";

    });

});



// =====================================
// Welcome Message
// =====================================

window.addEventListener("load", function () {

    console.log("Student Portfolio Successfully Loaded.");

});



// =====================================
// Typing Effect
// =====================================

const title = document.querySelector(".hero-text h2");

if (title) {

    const text = title.innerHTML;

    title.innerHTML = "";

    let i = 0;

    function typingEffect() {

        if (i < text.length) {

            title.innerHTML += text.charAt(i);

            i++;

            setTimeout(typingEffect, 80);

        }

    }

    typingEffect();

}



// =====================================
// Dynamic Visitor Counter
// =====================================

let visitors = localStorage.getItem("visitorCount");

if (visitors === null) {

    visitors = 0;

}

visitors++;

localStorage.setItem("visitorCount", visitors);

const visitorBox = document.createElement("div");

visitorBox.innerHTML = "👥 Visitor Count: " + visitors;

visitorBox.style.position = "fixed";

visitorBox.style.left = "20px";

visitorBox.style.bottom = "20px";

visitorBox.style.background = "#0d47a1";

visitorBox.style.color = "white";

visitorBox.style.padding = "10px 20px";

visitorBox.style.borderRadius = "10px";

visitorBox.style.fontWeight = "bold";

visitorBox.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

document.body.appendChild(visitorBox);



// =====================================
// Random Motivational Quotes
// =====================================

const quotes = [

    "Success is the sum of small efforts repeated every day.",

    "Learning never exhausts the mind.",

    "Dream big. Start small. Act now.",

    "Programming is learned by writing programs.",

    "Education is the passport to the future.",

    "Believe in yourself and all that you are."

];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const quoteBox = document.createElement("div");

quoteBox.innerHTML = "💡 " + randomQuote;

quoteBox.style.textAlign = "center";

quoteBox.style.padding = "20px";

quoteBox.style.background = "#fff3cd";

quoteBox.style.color = "#444";

quoteBox.style.fontWeight = "600";

document.body.appendChild(quoteBox);



// =====================================
// Console Information
// =====================================

console.log("===================================");

console.log("Student Portfolio Website");

console.log("COS 106 Practical Project");

console.log("Introduction to Web Technologies");

console.log("HTML");

console.log("CSS");

console.log("JavaScript");

console.log("Developed Successfully");

console.log("===================================");



// =====================================
// Arrays Example
// =====================================

const programmingLanguages = [

    "HTML",

    "CSS",

    "JavaScript",

    "Python",

    "C++"

];

programmingLanguages.forEach(function(language){

    console.log("Programming Language:", language);

});



// =====================================
// Function Example
// =====================================

function welcomeStudent(studentName){

    console.log("Welcome " + studentName + "!");

}

welcomeStudent("Your Name");



// =====================================
// End of File
// =====================================