
//I don't know why this isn't working... i need help.
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay=[];
var x = document.getElementById('game-board');
function creatBoard(){
	for (var i =0; i<cards.length; i++)
	{
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		board.appendChild(cardElement);
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
		board.appendChild(cardElement);
	}
}

function ismatch(cards){
if (cards[0]===cards[1]){
	alert("You found a match!");
}
else
{
	alert("Sorry, try again.");
}
}

function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));	
	console.log(this.getAttribute('data-card'))
	if (this.getAttribute('data-card')==='king'){
		this.innerHTML = "<img src='http://media.tumblr.com/tumblr_mciknqZ24G1r1jql3.jpg'>"
	}
	else
	{
		this.innerHTML = "<img src='http://i.istockimg.com/file_thumbview_approve/6737971/6/stock-illustration-6737971-queens-head-spade-suit-playing-card-.jpg'>"
	}
	if (cardsInPlay.length===2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
createBoard();