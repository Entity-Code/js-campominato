// GENERAZIONE LISTA 16 NUMERI CASUALI (DA 1 A 100)
var safeNum = ["Numero 1 : " + randomNum(100), "Numero 2 : " + randomNum(100), "Numero 3 : " + randomNum(100), "Numero 4 : " + randomNum(100), "Numero 5 : " + randomNum(100), "Numero 6 : " + randomNum(100), "Numero 7 : " + randomNum(100), "Numero 8 : " + randomNum(100), "Numero 9 : " + randomNum(100), "Numero 10 : " + randomNum(100), "Numero 11 : " + randomNum(100), "Numero 12 : " + randomNum(100), "Numero 13 : " + randomNum(100), "Numero 14 : " + randomNum(100), "Numero 15 : " + randomNum(100), "Numero 16 : " + randomNum(100), ]
console.log(safeNum);

//RICHIESTA ALL'UTENTE DI INSERIRE NUMERO COMPRESO TRA 1 E 100 (100-16) VOLTE

for (var i = 1; i <= (100-16); i++) {
   var requestNum = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));

}















//Functions

// transformazione stringa reverse
function randomNum(max) {
   if (max) { //se max è stato inserito, allora ritornami il valore random
   return Math.floor(Math.random() * max) + 1;
   } else { //se non è stato inserito, allora stampa questo messaggio
      return "non hai inserito il valore dell'argomento";
   }
}

// pari o dispari validator
function sameValueValidator(num, num2) {
   if (num === num2) {
      return " Non puoi inserire lo stesso numero più volte";
   }
 }
