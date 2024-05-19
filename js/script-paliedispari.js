"use strict";

//VARIABILE INPUT
const input = prompt("Inserisci la parola");

//REGULAR EXPRESSION, NON ACCETTI NUMERI E CARATTERI SPECIALI
const regex = /^[a-zA-Z]+$/;

//CONTROLLO CHE SIA UNA STRINGA E NON UN NUMERO
if (regex.exec(input) != null) {
    const array = [];
    array.push(input);
}
