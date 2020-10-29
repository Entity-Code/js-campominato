//selezioni
var containerPlay = document.getElementById("containerPlay");
var play = document.getElementById("play");
var titleMode = document.getElementById("cont-titleMode");
var gardenEasy = document.getElementById("cont-gardenEasy");
var gardenMedium = document.getElementById("cont-gardenMedium");
var gardenHard = document.getElementById("cont-gardenHard");

//easy
var easy = document.getElementById("easyMode");
easy.addEventListener("click",
	function() {
		// passaggio mode -> btn play
		titleMode.className = "dNone";
		containerPlay.className = "dBlock";
		// passaggio btn play -> game easy
		play.addEventListener("click",
			function() {
				containerPlay.className = "dNone";
				gardenEasy.className = "dBlock";

		      // GENERAZIONE LISTA 16 (BOMBE)
		      var bombsList = [];
		      while (bombsList.length < 16) {
		         var bombsElement = randomNum(100);
		         if (bombsList.includes(bombsElement) == false) {
		            bombsList.push(bombsElement);
		         }
		      }
		      // discommentare questo console.log per vedere in quali numeri si trovano le bombe
		      console.log(bombsList);

		      // GENERAZIONE RICHIESTE NUMERO UTENTE/ BOMBE / CASO DELL'INSERIMENTO NUMERI UGUALI
		      // caso mina non trovata
		      var minaTrovata = false;
				var numInRange = true;
		      //salvataggio valori inseriti dall'utente
		      var userNumList = [];
		      var i = 0;
		      while (i < (100-16) && minaTrovata == false) {
		         // l'utente inserisce numero compreso tra 1 e 100
		         var userNum = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));

		         // controllo che il numero inserito si trovi nel range indicato
		         if (userNum > 100 || userNum < 1) {
		            alert("Questo numero non è compreso tra 1 e 100 !")
		         }

		         // controllo mina trovata
		         if (bombsList.includes(userNum) == true) {
		            minaTrovata = true;
		            alert("BUM, hai perso !");
		         }

		         // controllo doppione numero inserito
		         if (userNumList.includes(userNum) == true) {
		            alert("Hai già usato questo numero, riprova !");
		         } else {
		            // push valori di input nell'array salvataggio
		            userNumList.push(userNum);
		            console.log("Numero già utilizzato: " + userNumList);
		         }
		         i++;
		      }

		      // score
		      alert("Hai fatto : " + (--i) + " punti in EASY MODE!");
		      location.reload();
			}
		);
	}
);





//medium
var medium = document.getElementById("mediumMode");
medium.addEventListener("click",
	function() {
		titleMode.className = "dNone";
 	  	containerPlay.className = "dBlock";
		//mode medium

		play.addEventListener("click",
			function() {
				containerPlay.className = "dNone";
				gardenMedium.className = "dBlock";

				// GENERAZIONE LISTA 16 (BOMBE)
		      var bombsList = [];
		      while (bombsList.length < 16) {
		         var bombsElement = randomNum(70);
		         if (bombsList.includes(bombsElement) == false) {
		            bombsList.push(bombsElement);
		         }
		      }
		      // discommentare questo console.log per vedere in quali numeri si trovano le bombe
		      console.log(bombsList);

		      // GENERAZIONE RICHIESTE NUMERO UTENTE/ BOMBE / CASO DELL'INSERIMENTO NUMERI UGUALI
		      // caso mina non trovata
		      var minaTrovata = false;
				var numInRange = true;
		      //salvataggio valori inseriti dall'utente
		      var userNumList = [];
		      var i = 0;
		      while (i < (80-16) && minaTrovata == false) {
		         // l'utente inserisce numero compreso tra 1 e 80
		         var userNum = parseInt(prompt("Inserisci un numero compreso tra 1 e 80"));

		         // controllo che il numero inserito si trovi nel range indicato
		         if (userNum > 80 || userNum < 1) {
		            alert("Questo numero non è compreso tra 1 e 80 !")
		         }

		         // controllo mina trovata
		         if (bombsList.includes(userNum) == true) {
		            minaTrovata = true;
		            alert("BUM, hai perso !");
		         }

		         // controllo doppione numero inserito
		         if (userNumList.includes(userNum) == true) {
		            alert("Hai già usato questo numero, riprova !");
		         } else {
		            // push valori di input nell'array salvataggio
		            userNumList.push(userNum);
		            console.log("Numero già utilizzato: " + userNumList);
		         }
		         i++;
		      }

		      // score
		      alert("Hai fatto : " + (--i) + " punti in MEDIUM MODE!");
		      location.reload();

			}
		);
});

//hard
var hard = document.getElementById("hardMode");
hard.addEventListener("click",
	function() {
		titleMode.className = "dNone";
 	  	containerPlay.className = "dBlock";
		//mode hard
		play.addEventListener("click",
			function() {
				containerPlay.className = "dNone";
				gardenHard.className = "dBlock";

				// GENERAZIONE LISTA 16 (BOMBE)
		      var bombsList = [];
		      while (bombsList.length < 16) {
		         var bombsElement = randomNum(50);
		         if (bombsList.includes(bombsElement) == false) {
		            bombsList.push(bombsElement);
		         }
		      }
		      // discommentare questo console.log per vedere in quali numeri si trovano le bombe
		      console.log(bombsList);

		      // GENERAZIONE RICHIESTE NUMERO UTENTE/ BOMBE / CASO DELL'INSERIMENTO NUMERI UGUALI
		      // caso mina non trovata
		      var minaTrovata = false;
				var numInRange = true;
		      //salvataggio valori inseriti dall'utente
		      var userNumList = [];
		      var i = 0;
		      while (i < (50-16) && minaTrovata == false) {
		         // l'utente inserisce numero compreso tra 1 e 80
		         var userNum = parseInt(prompt("Inserisci un numero compreso tra 1 e 50"));

		         // controllo che il numero inserito si trovi nel range indicato
		         if (userNum > 80 || userNum < 1) {
		            alert("Questo numero non è compreso tra 1 e 50 !")
		         }

		         // controllo mina trovata
		         if (bombsList.includes(userNum) == true) {
		            minaTrovata = true;
		            alert("BUM, hai perso !");
		         }

		         // controllo doppione numero inserito
		         if (userNumList.includes(userNum) == true) {
		            alert("Hai già usato questo numero, riprova !");
		         } else {
		            // push valori di input nell'array salvataggio
		            userNumList.push(userNum);
		            console.log("Numero già utilizzato: " + userNumList);
		         }
		         i++;
		      }

		      // score
		      alert("Hai fatto : " + (--i) + " punti in Medium Mode !");
		      location.reload();
			}
		);
	}
);




function backReload() {
	location.reload();
}




// // VERSIONE EASY 100 celle
//
// var cellList = [];
//
// var myList = document.getElementById("my-list");
//
// while (cellList.length < 100) {
// 	var cellElement = createListItem("hello");
// 	cellList.push(cellElement);
// }
//
//
// // appendChildren(cellList, cellElement);
//
// cellList.forEach(function (li) {
// 	myList.appendChild(li);
// });







//Functions

// transformazione stringa reverse
function randomNum(max) {
   if (max) { //se max è stato inserito, allora ritornami il valore random
   return Math.floor(Math.random() * max) + 1;
   } else { //se non è stato inserito, allora stampa questo messaggio
      return 0;
   }
}

// generazione <li>[text]</li>
function createListItem(item) {
	var li = document.createElement("li");
	li.textContent = item;
	return li;
}
function appendChildren(parent, children) {
	children.forEach(function (child) {
		parent.appendChild(child);
	});
}
