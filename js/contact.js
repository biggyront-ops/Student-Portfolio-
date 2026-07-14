/*=====================================================
    STUDENT PORTFOLIO WEBSITE
    COS 106 Practical Project
    File: js/contact.js
======================================================*/


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const contactForm = document.getElementById("contactForm");

const fullName = document.getElementById("name");

const email = document.getElementById("email");

const phone = document.getElementById("phone");

const subject = document.getElementById("subject");

const message = document.getElementById("message");

const successMessage = document.getElementById("successMessage");

const errorMessage = document.getElementById("errorMessage");


// ==========================================
// HIDE MESSAGES WHEN PAGE LOADS
// ==========================================

successMessage.style.display = "none";
errorMessage.style.display = "none";


// ==========================================
// EMAIL VALIDATION FUNCTION
// ==========================================

function isValidEmail(emailAddress) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(emailAddress);

}


// ==========================================
// PHONE VALIDATION FUNCTION
// Digits only
// ==========================================

function isValidPhone(phoneNumber) {

    const phonePattern = /^[0-9]+$/;

    return phonePattern.test(phoneNumber);

}


// ==========================================
// SHOW ERROR MESSAGE
// ==========================================

function showError(messageText) {

    errorMessage.style.display = "block";

    successMessage.style.display = "none";

    errorMessage.innerHTML = messageText;

}


// ==========================================
// SHOW SUCCESS MESSAGE
// ==========================================

function showSuccess() {

    errorMessage.style.display = "none";

    successMessage.style.display = "block";

}


// ==========================================
// CLEAR FORM
// ==========================================

function clearForm() {

    fullName.value = "";

    email.value = "";

    phone.value = "";

    subject.value = "";

    message.value = "";

}


// ==========================================
// FORM SUBMISSION
// ==========================================

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    // Remove extra spaces

    const nameValue = fullName.value.trim();

    const emailValue = email.value.trim();

    const phoneValue = phone.value.trim();

    const subjectValue = subject.value.trim();

    const messageValue = message.value.trim();


    // ======================================
    // EMPTY FIELD VALIDATION
    // ======================================

    if(

        nameValue === "" ||

        emailValue === "" ||

        phoneValue === "" ||

        subjectValue === "" ||

        messageValue === ""

    ){

        showError("Please complete all fields.");

        return;

    }


    // ======================================
    // EMAIL VALIDATION
    // ======================================

    if(!isValidEmail(emailValue)){

        showError("Please enter a valid email address.");

        return;

    }


    // ======================================
    // PHONE VALIDATION
    // ======================================

    if(!isValidPhone(phoneValue)){

        showError("Phone number must contain digits only.");

        return;

    }


    // ======================================
    // MESSAGE LENGTH
    // ======================================

    if(messageValue.length < 10){

        showError("Message should contain at least 10 characters.");

        return;

    }


    // ======================================
    // SUCCESS
    // ======================================

    showSuccess();

    clearForm();

});


// ==========================================
// LIVE NAME CAPITALIZATION
// ==========================================

fullName.addEventListener("blur", function(){

    const text = this.value.trim();

    if(text.length > 0){

        this.value =

        text.charAt(0).toUpperCase() +

        text.slice(1);

    }

});


// ==========================================
// PHONE INPUT
// ALLOW DIGITS ONLY
// ==========================================

phone.addEventListener("input", function(){

    this.value = this.value.replace(/[^0-9]/g, "");

});


// ==========================================
// SUBJECT CAPITALIZATION
// ==========================================

subject.addEventListener("blur", function(){

    const text = this.value.trim();

    if(text.length > 0){

        this.value =

        text.charAt(0).toUpperCase() +

        text.slice(1);

    }

});


// ==========================================
// CHARACTER COUNTER
// ==========================================

const counter = document.createElement("small");

counter.style.display = "block";

counter.style.marginTop = "10px";

counter.style.color = "#666";

message.parentNode.insertBefore(counter, message.nextSibling);

message.addEventListener("input", function(){

    counter.innerHTML =

    "Characters: " +

    message.value.length;

});


// ==========================================
// RESET ERROR WHEN USER TYPES
// ==========================================

const inputs = [

    fullName,

    email,

    phone,

    subject,

    message

];

inputs.forEach(function(input){

    input.addEventListener("input", function(){

        errorMessage.style.display = "none";

    });

});


// ==========================================
// PAGE LOADED
// ==========================================

window.addEventListener("DOMContentLoaded", function(){

    console.log("Contact Page Loaded Successfully.");

});


// ==========================================
// END OF FILE
// ==========================================