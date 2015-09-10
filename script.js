$( document ).ready(function() {

	var playersTurn = "Player One";
	 


	$(".btn").click(function() {
		if(playersTurn === "Player One"){
	        $(this).text("x");
	        $(this).css("color", "blue");
	        playersTurn = "Player Two";
	    }
		else if(playersTurn === "Player Two"){
			$(this).text("o");
	        $(this).css("color", "red");
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
		}
		else if (btn1 == 'o' && btn2 == 'o' && btn3 == 'o'){
			alert("Player2 Wins!")
		}
		else if (btn4 == 'x' && btn5 == 'x' && btn6 == 'x'){
			alert("Player1 Wins!")
		}
		else if (btn4 == 'o' && btn5 == 'o' && btn6 == 'o'){
			alert("Player2 Wins!")
		}
		else if (btn7 == 'x' && btn8 == 'x' && btn9 == 'x'){
			alert("Player1 Wins!")
		}
		else if (btn7 == 'o' && btn8 == 'o' && btn9 == 'o'){
			alert("Player2 Wins!")
		}
		else if (btn1 == 'x' && btn4 == 'x' && btn7 == 'x'){
			alert("Player1 Wins!")
		}
		else if (btn1 == 'o' && btn4 == 'o' && btn7 == 'o'){
			alert("Player2 Wins!")
		}
		else if (btn2 == 'x' && btn5 == 'x' && btn8 == 'x'){
			alert("Player1 Wins!")
		}
		else if (btn2 == 'o' && btn5 == 'o' && btn8 == 'o'){
			alert("Player2 Wins!")
		}
		else if (btn3 == 'x' && btn6 == 'x' && btn9 == 'x'){
			alert("Player1 Wins!")
		}
		else if (btn3 == 'o' && btn6 == 'o' && btn9 == 'o'){
			alert("Player2 Wins!")
		}
		else if (btn1 == 'x' && btn5 == 'x' && btn9 == 'x'){
			alert("Player1 Wins!")
		}
		else if (btn1 == 'o' && btn5 == 'o' && btn9 == 'o'){
			alert("Player2 Wins!")
		}
		else if (btn3 == 'x' && btn5 == 'x' && btn7 == 'x'){
			alert("Player1 Wins!")
		}
		else if (btn3 == 'o' && btn5 == 'o' && btn7 == 'o'){
			alert("Player2 Wins!")
		}
		// else if ( $(".btn").text() == "x" || "o" ) {
		// 	alert("meow")
		// }

		});
//create a counter that will decide who won the game and store it in a variable
//***Done***create if statements to decide who the winner is
//need event handler
		// var btn1 = $(".btn1").text();
		// var btn2 = $(".btn2").text();
		// var btn3 = $(".btn3").text();
		// $(".btn").click(function(){
		// console.log(btn1)
		// if (btn1 == 'x' && btn2 == 'x' && btn3 == 'x'){ 
		// 	alert("Player1 Wins!");
		// }
		// });
		
		
	 


		// check rows
			// val0 = $(".btn1").value;
			// val1 = $(".btn2").value;
			// val2 = $(".btn3").value;
			// if(val0 == 'x' && val1 == 'x' && val2 == 'x')
			// {
			// status.innerHTML = "X WINS!";
			// return true;
			// }
			// else if(val0 == 'o' && val1 == 'o' && val2 == 'o')
			// {
			// status.innerHTML = "O WINS!";
			// return true;
			// }
			// })

		// $("#reset").click(function (){

	 //    player1Name = $("#player1").val();
	 //    player2Name = $("#player2").val();

	 //    if(player1Name=="" || player2Name==""){
	 //        alert("Please set player all the names.");
	 //        return;
	 //    }

	 //    setTurn();


});
	
	$("#reset").click(function(){
		$(".btn").text("");
	});

	function startNewGame(){
	    location.reload(true);
}

