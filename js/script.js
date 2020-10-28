// GENERAZIONE LISTA 16 (BOMBE)
var bombsNum = [];
i = 0;
while (bombsNum.length < 16) {
   bombsNum[i] = randomNum(100);
   console.log(bombsNum[i]);
   i++;
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
