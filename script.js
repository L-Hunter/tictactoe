// var a1 = document.getElementById("a1");
// var a2 = document.getElementById("a2");
// var a3 = document.getElementById("a3");
// var b1 = document.getElementById("b1");
// var b2 = document.getElementById("b2");
// var b3 = document.getElementById("b3");
// var c1 = document.getElementById("c1");
// var c2 = document.getElementById("c2");
// var c3 = document.getElementById("c3");

var counter = 1;

// var board = {
// 	a1: " ",
// 	a2: " ",
// 	a3: " ",
// 	b1: " ",
// 	b2: " ",
// 	b3: " ",
// 	c1: " ",
// 	c2: " ",
// 	c3: " "
// }

function yourMove (place){
	// if (a1 === a2 === a3) {
	// 	alert("three in a row!");
	// }
	if (counter % 2 === 0) {
		place.innerHTML = "O";
		//board.place = "O";
		counter ++;
	}
	else {
		place.innerHTML = "X";
		//board[place] = "X";
		counter ++;
	}
}




// wins:
// a1.value === a2.value === a3.value 
// b1 b2 b3
// c1 c2 c3
// a1 b1 c1
// a2 b2 c2
// a3 b3 c3
// a1 b2 c3
// c1 b2 a3

//prevent overwriting an X or an O
//stop with 3 in a row

// from odin project
// Create a render() function which cycles through that board object and creates the appropriate HTML elements. Style them to look like a real tic-tac-toe board.
// Build the main game logic (we won't give too many hints here). When the user clicks on a blank square, it should show the current player's symbol. This can be triggered by listening for a click event on the appropriate div. It may be helpful to give each div a data attribute or id based on its position so you can identify it in your JS code.
// The game logic should then check whether the game is over -- if any player has achieved victory or if there are no more turns available. In the event of victory or defeat, display an appropriate message on the screen.