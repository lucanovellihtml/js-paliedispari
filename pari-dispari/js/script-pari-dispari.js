"use strict";

//VARIABILI BOTTONE
const button_even = document.getElementById("button_even");
const button_odd = document.getElementById("button_odd");

//METODO DI ASCOLTO DEL CLICK SUL PULSTANTE PARI O DISPARI
button_even.addEventListener("click", function () {
    console.log("HAI PREMUTO PARI");
    checkSum(true);
});

button_odd.addEventListener("click", function () {
    console.log("HAI PREMUTO DISPARI");
    checkSum(false);
});


/*
    - METODO CHE CONTROLLA SE E' PARI O DISPARI;
    - VIENE RICHIESTO L'INPUT INTERO DALL'UTENTE E POI GENERATO UN NUMERO RANDOM,
      VIENE FATTA LA SOMMA E CONTROLLATO IL RISULTATO;
    - LA VARIABILE FLAG IDENTIFICA CHE TIPO DI BOTTONE E' STATO PREMUTO;  
*/
function checkSum(flag) {

    const number = prompt("Inserisci un numero tra 1 e 5");
    const summ = parseInt(number) + Math.floor(Math.random() * 5) + 1;
    console.log("SOMMA ---> " + summ);

    if (summ % 2 === 0 && flag)
        console.log("HAI VINTO, IL NUMERO E' PARI");

    else if (summ % 2 !== 0 && !flag)
        console.log("HAI VINTO, IL NUMERO E' DISPARI");

    else
        console.log("HAI PERSO");

}