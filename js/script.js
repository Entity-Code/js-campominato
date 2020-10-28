// GENERAZIONE LISTA 16 (BOMBE)
var bombsNum = [];

while (bombsNum.length < 16) {
   var bombsElement = randomNum(100);

   if (bombsNum.includes(bombsElement) == false) {
      bombsNum.push(bombsElement);
   }
}
console.log(bombsNum);


// richiesta x86
// <84  mina trovata stesso numero

var minaTrovata = false;
var i = 0;
while (i < 84 && minaTrovata == false && theSameNum == false) {
   // caso mina trovata
   var userNum = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
   if (bombsNum.includes(userNum) == true) {
      minaTrovata = true;
      alert("BUM, hai perso !");
   }

   // caso doppione numero inserito
   var theSameNum = false;
   var userNumList = [];
   userNumList.push(userNum);
   userNumList(5).fill(userNum);
   if ((userNumList.includes(userNum) == userNum) {
      console.log("uguale");
   }
   console.log(userNumList);
   i++;
}
alert("Hai fatto : " + (i-1) + " punti");






//Functions

// transformazione stringa reverse
function randomNum(max) {
   if (max) { //se max è stato inserito, allora ritornami il valore random
   return Math.floor(Math.random() * max) + 1;
   } else { //se non è stato inserito, allora stampa questo messaggio
      return 0;
   }
}
