// creato solo per fixare i mille bug del prompt riguardo la console, dando il tempo di aprirla
var gioca = document.getElementById("gioca");
gioca.addEventListener("click",
	function() {

      // GENERAZIONE LISTA 16 (BOMBE)
      var bombsList = ["Numeri bomba -> "];
      while (bombsList.length < 16) {
         var bombsElement = randomNum(100);
         if (!bombsList.includes(bombsElement)) {
            bombsList.push(bombsElement);
         }
      }
      // discommentare questo console.log per vedere in quali numeri si trovano le bombe
      console.log(bombsList);


      // GENERAZIONE RICHIESTE NUMERO UTENTE/ BOMBE / CASO DELL'INSERIMENTO NUMERI UGUALI
      // caso mina non trovata
      var minaTrovata = false;
      //salvataggio valori inseriti dall'utente
      var userNumList = [];
      var i = 0;
      while (i < 84 && minaTrovata == false) {
         // chiedo all'utente di inserire un numero
         var userNum = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));

         // controllo che il numero inserito si trovi nel range indicato o non sia un numero
         if (userNum > 100 || userNum < 1) {
            alert("Questo numero non è compreso tra 1 e 100 !")
				--i;
         } else if (isNaN(userNum) == true) {
         	alert("Questo non è un numero !");
				--i;
         }

         // controllo mina trovata
         if (bombsList.includes(userNum)) {
            minaTrovata = true;
            alert("BUM, hai perso !");
         }

         // controllo doppione numero inserito
         if (userNumList.includes(userNum)) {
            alert("Hai già usato questo numero, riprova !");
         } else {
            // push valori di input nell'array salvataggio
            userNumList.push(userNum);
            console.log("Numeri che hai già utilizzato: " + userNumList);
         }
         i++;
      }

      // score
      alert("Hai fatto : " + (--i) + " punti");
      location.reload();
	}
);








//Functions

function randomNum(max) {
	if (max) {
		return Math.floor(Math.random() * max) + 1;
	} else {
		return 0;
	}
}
