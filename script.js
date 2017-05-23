document.getElementById("playerX").style.color = "red";
document.getElementById("playerO").style.color = "gray";
var counter = 1;

var activeGame = true;

function newGame(){
	location.reload();
}

function yourMove (place){
	if (activeGame === true && place.textContent != "X" && place.textContent != "O"){
		if (counter % 2 === 0) {
			place.innerHTML = "O";		
			counter ++;
			victory("O");
			playerStats();
		} else {
			place.innerHTML = "X";
			counter ++;
			victory("X");
			playerStats();
		}
	}
}

function playerStats(){
	var pX = document.getElementById("playerX");
	var pO = document.getElementById("playerO");
	if (activeGame === true) {
		if (counter % 2 === 0) {
			pO.style.color = "red";
			pX.style.color = "gray";
		} else {
			pO.style.color = "gray";
			pX.style.color = "red";
		}
	}
}

function victory(w){
	var a1 = document.getElementById("a1").textContent;
	var a2 = document.getElementById("a2").textContent;
	var a3 = document.getElementById("a3").textContent;
	var b1 = document.getElementById("b1").textContent;
	var b2 = document.getElementById("b2").textContent;
	var b3 = document.getElementById("b3").textContent;
	var c1 = document.getElementById("c1").textContent;
	var c2 = document.getElementById("c2").textContent;
	var c3 = document.getElementById("c3").textContent;

	var winnerMessage = "Three in a row! Congrats on your victory, Player " + w + "!";

	if ((a1 == "X" || a1 == "O") && (a1 == a2 && a1 == a3)) {
		activeGame = false;
		alert(winnerMessage);
	} else if ((b1 == "X" || b1 == "O") && (b1 == b2 && b1 == b3)) {
		activeGame = false;
		alert(winnerMessage);
	} else if ((c1 == "X" || c1 == "O") && (c1 == c2 && c1 == c3)){
		activeGame = false;
		alert(winnerMessage);
	} else if ((a1 == "X" || a1 == "O") && (a1 == b1 && a1 == c1)){
		activeGame = false;
		alert(winnerMessage);
	} else if ((a2 == "X" || a2 == "O") && (a2 == b2 && a2 == c2)){
		activeGame = false;
		alert(winnerMessage);
	} else if ((a3 == "X" || a3 == "O") && (a3 == b3 && a3 == c3)){
		activeGame = false;
		alert(winnerMessage);
	} else if ((a1 == "X" || a1 == "O") && (a1 == b2 && a1 == c3)){
		activeGame = false;
		alert(winnerMessage);
	} else if ((c1 == "X" || c1 == "O") && (c1 == b2 && c1 == a3)){
		activeGame = false;
		alert(winnerMessage);
	} else if (counter === 10) {
		activeGame = false;
		alert("Game over, LOSERS!");
	}
}

