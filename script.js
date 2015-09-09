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

	    });
	
	$("#reset").click(function(){
		$(".btn").text("");
	})

	});

	function startNewGame(){
	    location.reload(true);
}

// var cell;
// var nextTurn = 'X';



// function mouseMotion(ref,motion){
// if(motion == 'over')
//     {
//         ref.style.borderColor='#E00';
//     }
//     else if(motion == 'out')
//     {
//         ref.style.borderColor='#CCC';
//     }
// }

// function cellClick(cell){
// if (cell.innerHTML === 'X' || cell.innerHTML === 'O')
// { alert ('Square has already been choosen, please select another square');
// return
// }
// cell.innerHTML = nextTurn;
// playersTurn();
// winnerIs();

//  }
// function playersTurn(){
// if(nextTurn == 'X'){
//     nextTurn = 'O';
//     }
// else {
//     nextTurn = 'X';
//     }
// }

// function winnerIs(){

// if (document.getElementById("cell1x1").innerHTML == 'X' &&    document.getElementById("cell1x2").innerHTML == 'X' && document.getElementById("cell1x3").innerHTML == 'X')
// {document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';

// }

// else if (document.getElementById("cell2x1").innerHTML == 'X' && document.getElementById("cell2x2").innerHTML == 'X' && document.getElementById("cell2x3").innerHTML == 'X')
// {document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// else if (document.getElementById("cell3x1").innerHTML == 'X' && document.getElementById("cell3x2").innerHTML == 'X' && document.getElementById("cell3x3").innerHTML == 'X')
// {document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// else if (document.getElementById("cell1x1").innerHTML == 'X' && document.getElementById("cell2x2").innerHTML == 'X' && document.getElementById("cell3x3").innerHTML == 'X')
// {document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// else if (document.getElementById("cell1x3").innerHTML == 'X' && document.getElementById("cell2x2").innerHTML == 'X' && document.getElementById("cell3x1").innerHTML == 'X')
// {document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// else if(document.getElementById("cell1x1").innerHTML == 'X' && document.getElementById("cell2x1").innerHTML == 'X' && document.getElementById("cell3x1").innerHTML == 'X')
// {document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// else if(document.getElementById("cell1x2").innerHTML == 'X' && document.getElementById("cell2x2").innerHTML == 'X' && document.getElementById("cell3x2").innerHTML == 'X')
// {document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// else if(document.getElementById("cell1x3").innerHTML == 'X' && document.getElementById("cell2x3").innerHTML == 'X' && document.getElementById("cell3x3").innerHTML == 'X')
// {document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// else if (document.getElementById("cell1x1").innerHTML == 'O' && document.getElementById("cell1x2").innerHTML == 'O' && document.getElementById("cell1x3").innerHTML == 'O')
// {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// else if (document.getElementById("cell2x1").innerHTML == 'O' && document.getElementById("cell2x2").innerHTML == 'O' && document.getElementById("cell2x3").innerHTML == 'O')
//     {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// else if (document.getElementById("cell3x1").innerHTML == 'O' && document.getElementById("cell3x2").innerHTML == 'O' && document.getElementById("cell3x3").innerHTML == 'O')
//     {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// else if (document.getElementById("cell1x1").innerHTML == 'O' && document.getElementById("cell2x2").innerHTML == 'O' && document.getElementById("cell3x3").innerHTML == 'O')
//     {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// else if (document.getElementById("cell1x1").innerHTML == 'O' && document.getElementById("cell1x2").innerHTML == 'O' && document.getElementById("cell1x3").innerHTML == 'O')
//     {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// else if(document.getElementById("cell1x1").innerHTML == 'O' && document.getElementById("cell2x1").innerHTML == 'O' && document.getElementById("cell3x1").innerHTML == 'O')
//     {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// else if(document.getElementById("cell1x2").innerHTML == 'O' && document.getElementById("cell2x2").innerHTML == 'O' && document.getElementById("cell3x2").innerHTML == 'O')
//     {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// else if(document.getElementById("cell1x3").innerHTML == 'O' && document.getElementById("cell2x3").innerHTML == 'O' && document.getElementById("cell3x3").innerHTML == 'O')
//     {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
//  document.getElementById('winnerIs').style.display = 'block';
//  }
// }


// function startNewGame(){
//     location.reload(true);
// }