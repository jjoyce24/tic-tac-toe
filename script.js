$( document ).ready(function() {

	var playersTurn = "Player One";
	var moveCount = 0;
	var player1score = 0
	var player2score = 0
	var score = player1score + "vs" + player2score


	$(".btn").click(function() {
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
			alert("Player1 Wins!");
			player1score++;
			console.log(player1score);
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn1 == 'o' && btn2 == 'o' && btn3 == 'o'){
			alert("Player2 Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn4 == 'x' && btn5 == 'x' && btn6 == 'x'){
			alert("Player1 Wins!")
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn4 == 'o' && btn5 == 'o' && btn6 == 'o'){
			alert("Player2 Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn7 == 'x' && btn8 == 'x' && btn9 == 'x'){
			alert("Player1 Wins!")
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn7 == 'o' && btn8 == 'o' && btn9 == 'o'){
			alert("Player2 Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn1 == 'x' && btn4 == 'x' && btn7 == 'x'){
			alert("Player1 Wins!")
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn1 == 'o' && btn4 == 'o' && btn7 == 'o'){
			alert("Player2 Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn2 == 'x' && btn5 == 'x' && btn8 == 'x'){
			alert("Player1 Wins!")
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn2 == 'o' && btn5 == 'o' && btn8 == 'o'){
			alert("Player2 Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn3 == 'x' && btn6 == 'x' && btn9 == 'x'){
			alert("Player1 Wins!")
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn3 == 'o' && btn6 == 'o' && btn9 == 'o'){
			alert("Player2 Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn1 == 'x' && btn5 == 'x' && btn9 == 'x'){
			alert("Player1 Wins!")
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn1 == 'o' && btn5 == 'o' && btn9 == 'o'){
			alert("Player2 Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn3 == 'x' && btn5 == 'x' && btn7 == 'x'){
			alert("Player1 Wins!")
			player1score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if (btn3 == 'o' && btn5 == 'o' && btn7 == 'o'){
			alert("Player2 Wins!")
			player2score++;
			$(".btn").text("");
			moveCount = 0;
		}
		else if ( moveCount >= 9) {
			alert("It's a Draw!")
			moveCount = 0;
		}
		else{
			return;
		}



		});
//***DONE***creat a variable that stores wins & add 1 to each if else win
//SCOREBOARD create a counter that will decide who won the game and store it in a variable
//***DONE***when player wins clears board.
//***DONE***create if statements to decide who the winner is
//be able to pick o or x

});
//why is reset button not working anymore???	
	$("#reset").click(function(){
		$(".btn").text("");
	});

	function startNewGame(){
	    location.reload(true);
}

