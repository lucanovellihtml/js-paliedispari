"use strict";

//VARIABILE INPUT
const input = prompt("Inserisci la parola");

//REGULAR EXPRESSION, NON ACCETTI NUMERI E CARATTERI SPECIALI
const regex = /^\w+(?: \w+)*$/;

//CONTROLLO CHE SIA UNA STRINGA E NON UN NUMERO
if (regex.exec(input) != null) {

    if (input.indexOf(" ") !== -1) {
        console.log("CONTIENE SPAZI");
        const array = input.split(" ").join("");
        const array_reverse = reverseString(array)
        console.log("STRINGA ----> " + array + " // STRINGA REVERSE ---> " + array_reverse);
        checkPalindrome(array, array_reverse);
    }
    else {
        console.log("NON CONTIENE SPAZI");
        const array = input.split("").join("");
        const array_reverse = reverseString(array)
        console.log("STRINGA ----> " + array + " // STRINGA REVERSE ---> " + array_reverse);
        checkPalindrome(array, array_reverse);
    }

}

//METODO CONTROLLO CHE LA STRINGA SIA PALINDROMA
function checkPalindrome(array, array_reverse) {

    for (let i = 0; i < array.length; i++) {
        let counter = ((array_reverse.length - 1) - i);
        console.log("COUNT ---> " + i + " // " + counter);
        if (array[i] === array_reverse[counter]) {
            console.log("CONFRONTO ---> " + array[i] + " = " + array_reverse[counter]);
            console.log("SONO UGUALI");
        }
        else {
            console.log("NON SONO UGUALI");
        }

    }

    //return "NON SONO UGUALI";
}

//METODO REVERSE
function reverseString(array) {

    const array_reverse = [];

    for (let i = 0; i < array.length; i++) {
        const counter = ((array.length - 1) - i);
        array_reverse.push(array[counter]);
    }
    console.log("STRINGA ----> " + array.length + " // STRINGA REVERSE ---> " + array_reverse.length);

    return array_reverse;
}