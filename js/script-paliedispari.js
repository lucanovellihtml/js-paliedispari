"use strict";

//VARIABILE INPUT
const input = prompt("Inserisci la parola");

//REGULAR EXPRESSION, NON ACCETTI NUMERI E CARATTERI SPECIALI
const regex = /^\w+(?: \w+)*$/;

//CONTROLLO CHE SIA UNA STRINGA E NON UN NUMERO
if (regex.exec(input) != null) {
    const string_input = input;
    if (string_input.indexOf(" ") !== -1) {
        console.log("CONTIENE SPAZI");
        const array_reverse = input.split(" ").reverse().join("");
        console.log("STRINGA ----> " + input + " // STRINGA REVERSE ---> " + array_reverse);
    }
    else {
        console.log("NON CONTIENE SPAZI");
        const array_reverse = input.split("").reverse().join("");
        console.log("STRINGA ----> " + input + " // STRINGA REVERSE ---> " + array_reverse);
    }
}

//METODO CONTROLLO CHE LA STRINGA SIA PALINDROMA
/*function checkPalindrome(stringa_uno, stringa_due) {
    
    if[array === 

}*/