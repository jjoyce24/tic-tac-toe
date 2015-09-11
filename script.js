//***DONE***creat a variable that stores wins & add 1 to each if else win
//***DONE*** create a counter that will decide who won the game and store it in a variable
//***DONE***when player wins clears board.
//***DONE***create if statements to decide who the winner is
$( document ).ready(function() {

	var playersTurn = "Player One";
	var moveCount = 0;
	var player1score = 0
	var player2score = 0

	$(".btn").click(function() {
		var check = $(this).text();
		if( check == "x" || check == "o"){
			return;
		}
		if(playersTurn === "Player One"){
	        $(this).text("x");
	        $(this).css("color", "blue");
	        moveCount++;
	        playersTurn = "Player Two";
	    }
		else if(playersTurn === "Player Two"){
			$(this).text("o");
	        $(this).css("color", "red");
	        moveCount++;
	        playersTurn = "Player One";
		}
		
		var btn1 = $(".btn1").text();
		var btn2 = $(".btn2").text();
		var btn3 = $(".btn3").text();
		var btn4 = $(".btn4").text();
		var btn5 = $(".btn5").text();
		var btn6 = $(".btn6").text();
		var btn7 = $(".btn7").text();
		var btn8 = $(".btn8").text();
		var btn9 = $(".btn9").text();
		
		if (btn1 == 'x' && btn2 == 'x' && btn3 == 'x'){ 
			alert("Player X Wins!");
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn1 == 'o' && btn2 == 'o' && btn3 == 'o'){
			alert("Player O Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn4 == 'x' && btn5 == 'x' && btn6 == 'x'){
			alert("Player X Wins!")
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn4 == 'o' && btn5 == 'o' && btn6 == 'o'){
			alert("Player O Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn7 == 'x' && btn8 == 'x' && btn9 == 'x'){
			alert("Player X Wins!")
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn7 == 'o' && btn8 == 'o' && btn9 == 'o'){
			alert("Player O Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn1 == 'x' && btn4 == 'x' && btn7 == 'x'){
			alert("Player X Wins!")
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn1 == 'o' && btn4 == 'o' && btn7 == 'o'){
			alert("Player O Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn2 == 'x' && btn5 == 'x' && btn8 == 'x'){
			alert("Player X Wins!")
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn2 == 'o' && btn5 == 'o' && btn8 == 'o'){
			alert("Player O Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn3 == 'x' && btn6 == 'x' && btn9 == 'x'){
			alert("Player X Wins!")
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn3 == 'o' && btn6 == 'o' && btn9 == 'o'){
			alert("Player O Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn1 == 'x' && btn5 == 'x' && btn9 == 'x'){
			alert("Player X Wins!")
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn1 == 'o' && btn5 == 'o' && btn9 == 'o'){
			alert("Player O Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn3 == 'x' && btn5 == 'x' && btn7 == 'x'){
			alert("Player X Wins!")
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn3 == 'o' && btn5 == 'o' && btn7 == 'o'){
			alert("Player O Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if ( moveCount >= 9) {
			alert("It's a Draw!")
			moveCount = 0;
			$(".btn").text("");
		}
		else{
			return;
		}
//scoreboard 
		if (player1score >= 1 || player2score >= 1) {
			$('#player1').val("Player X has" + " " + player1score + " " + "wins");
			$('#player2').val("Player O has" + " " + player2score + " " + "wins");
		}

		});

});

// The reload() method is used to reload the current document.

// The reload() method does the same as the reload button in your browser.
function startNewGame(){
	location.reload(true);
}

// $("#reset").click(function(){
// 	$(".btn").text("");
// });


