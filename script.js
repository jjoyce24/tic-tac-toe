$( document ).ready(function() {

	var matrix = [[]]
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


//create if statements to decide who the winner is
		var btn1 = $(".btn1").text;
		var btn2 = $(".btn2").text;
		var btn3 = $(".btn3").text;
		if (btn1.text == 'x' && btn2.text == 'x' && btn3.text == 'x'){ 
			alert("Player1 Wins!")
		}

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

		$("#reset").click(function (){

	    player1Name = $("#player1").val();
	    player2Name = $("#player2").val();

	    if(player1Name=="" || player2Name==""){
	        alert("Please set player all the names.");
	        return;
	    }

	    setTurn();
});

	});
	
	$("#reset").click(function(){
		$(".btn").text("");
	})



	});

	function startNewGame(){
	    location.reload(true);
}

