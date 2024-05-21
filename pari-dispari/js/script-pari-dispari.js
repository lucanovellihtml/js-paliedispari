"use strict";

//VARIABILI BOTTONE
const button_even = document.getElementById("button_even");
const button_odd = document.getElementById("button_odd");

button_even.addEventListener("click", function () {
    console.log("HAI PREMUTO PARI");
});

button_odd.addEventListener("click", function () {
    console.log("HAI PREMUTO DISPARI");
});