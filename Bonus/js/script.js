//selezioni
var containerPlay = document.getElementById("containerPlay");
var play = document.getElementById("play");
var titleMode = document.getElementById("cont-titleMode");
var backBtn = document.getElementById("backBtn");


//easy
var easy = document.getElementById("easyMode");
easy.addEventListener("click",
	function() {
		titleMode.className = "dNone";
		containerPlay.className = "dBlock";
		play.addEventListener("click",
			function() {
		      // GENERAZIONE LISTA 16 (BOMBE)
		      var bombsList = ["Numeri bomba -> "];

		      while (bombsList.length < 16) {
		         var bombsElement = randomNum(100);
		         if (bombsList.includes(bombsElement) == false) {
		            bombsList.push(bombsElement);
		         }
		      }
		      // discommentare questo console.log per vedere in quali numeri si trovano le bombe
		      // console.log(bombsList);

		      // GENERAZIONE RICHIESTE NUMERO UTENTE/ BOMBE / CASO DELL'INSERIMENTO NUMERI UGUALI
		      // caso mina non trovata
		      var minaTrovata = false;
				var numInRange = true;
		      //salvataggio valori inseriti dall'utente
		      var userNumList = [];
		      var i = 0;
		      while (i < 84 && minaTrovata == false) {
		         // chiedo all'utente di inserire un numero
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
		            console.log("Numeri che hai già utilizzato: " + userNumList);
		         }
		         i++;
		      }

		      // score
		      alert("Hai fatto : " + (--i) + " punti");
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
	}
);

//hard
var hard = document.getElementById("hardMode");
hard.addEventListener("click",
	function() {
		titleMode.className = "dNone";
 	  	containerPlay.className = "dBlock";
		//mode hard
	}
);

backBtn.addEventListener("click",
	function() {
	  location.reload();
	}
);



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
