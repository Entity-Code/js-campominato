// GENERAZIONE LISTA 16 (BOMBE)
var bombsNum = [];
// i = 1;
// while (bombsNum.length < 16) {
//    console.log(randomNum(100));
//    i++;
// }






















//Functions

// transformazione stringa reverse
function randomNum(max) {
   if (max) { //se max è stato inserito, allora ritornami il valore random
   return Math.floor(Math.random() * max) + 1;
   } else { //se non è stato inserito, allora stampa questo messaggio
      return "non hai inserito il valore dell'argomento";
   }
}
