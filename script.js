$( document ).ready(function() {
 
var player1 = 1;
function display_input(square){ 
    if ( player1 == 1 ){
        $("#player1").innerHTML = "X";
        player1 = 0;
    } else {
        $("#player1").innerHTML = "O";    
        player1 = 1;
    }   
}
$(".btn").click(function(event) {
 
        $(this).text("x")
 
    });
$("#reset").click(function(){
	$(".btn").text("");
})
 
});