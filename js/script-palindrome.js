"use strict";

/*
    -VARIABILE INPUT;
    -L'INPUT IN INGRESSO E' TRASFORMATO IN MINUSCOLO;
*/
const input = prompt("Inserisci la parola").toLowerCase();

//REGULAR EXPRESSION, NON ACCETTI NUMERI E CARATTERI SPECIALI
const regex = /^\w+(?: \w+)*$/;


/*
   -CONTROLLO CHE SIA UNA STRINGA E NON UN NUMERO;
   -CONTROLLO CHE LA STRINGA ABBIA SPAZI O MENO;
   -CREAZIONE DEI DUE ARRAY CHE CONTERRANNO LA STRINGA E LA STRINGA REVERSE;
   -INSERITO METODO DI CONTROLLO CHE LA STRINGA SIA PALINDROMA E IL METODO DI STAMPA;
*/
if (regex.exec(input) != null) {

    if (input.indexOf(" ") !== -1) {
        console.log("CONTIENE SPAZI");
        const array = input.split(" ").join("");
        const array_reverse = reverseString(array)
        console.log("STRINGA ----> " + array + " // STRINGA REVERSE ---> " + array_reverse);
        setResponse(checkPalindrome(array, array_reverse));
    }
    else {
        console.log("NON CONTIENE SPAZI");
        const array = input.split("").join("");
        const array_reverse = reverseString(array)
        console.log("STRINGA ----> " + array + " // STRINGA REVERSE ---> " + array_reverse);
        setResponse(checkPalindrome(array, array_reverse));
    }

}


/*
   -METODO CONTROLLO CHE LA STRINGA SIA PALINDROMA;
   -VENGONO CICLATI I DUE ARRAY E CONFRONTATO I CARATTERi;
   -VIENE RESTITUITO TRUE SE LA FRASE INVERTITA, HA LO STESSO SIGNIFICATO;
*/
function checkPalindrome(array, array_reverse) {

    for (let i = 0; i < array.length; i++) {
        //let counter = ((array_reverse.length - 1) - i);
        //console.log("COUNT ---> " + i + " // " + counter);
        if (array[i] !== array_reverse[i]) {
            return false;
        }
    }

    return true;
}


/*
   -METODO DI STAMPA;
   -DOPO AVER CONTROLLATO CHE LA STRINGA SIA PALINDROMA, VIENE STAMPATO NELLA PAGINA
    HTML, LA RESPONSE;
*/
function setResponse(flag) {

    const header = document.querySelector("header");
    const response = document.createElement("h1");
    header.append(response);

    if (flag)
        response.innerHTML = "LA FRASE E' PALINDROMA";
    else
        response.innerHTML = "LA FRASE NON E' PALINDROMA";

}


/*
   -METODO REVERSE;
   -IN INPUT VIENE PASSATO L'ARRAY CON LA STRINGA, VIENE CREATO UN SECONDO ARRAY
    CON LA STRINGA ROVESCIATA;
   -VIENE RESTITUITO L'ARRAY;
*/
function reverseString(array) {

    const array_reverse = [];

    for (let i = 0; i < array.length; i++) {
        const counter = ((array.length - 1) - i);
        array_reverse.push(array[counter]);
    }

    //console.log("STRINGA ----> " + array.length + " // STRINGA REVERSE ---> " + array_reverse.length);

    return array_reverse;
}