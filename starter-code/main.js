var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

/*if (cardTwo === cardFour)
{
	alert("You found a match!")
}
else
{
	alert("Sorry, try again.")
}*/

var x = document.getElementById('game-board');
function creatBoard(){
	for (var i =0; i<cards.length; i++)
	{
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		board.appendChild(cardElement);
	}
}