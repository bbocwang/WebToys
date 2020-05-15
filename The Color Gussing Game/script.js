var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
hard.classList.add("selected");
var numberOfSquares = 6;

easy.addEventListener("click", function(){
	numberOfSquares = 3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors = generateColors(3);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	
	updateSquares(colors);
	for (var i = 0; i < squares.length; i++) {
		if(!colors[i]){
			squares[i].style.display = "none";
		}
	}
});

hard.addEventListener("click", function(){
	numberOfSquares = 6;
	easy.classList.remove("selected");
	hard.classList.add("selected");
	colors = generateColors(6);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	
	updateSquares(colors);
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
		}
	}
});

var colors = generateColors(6);
var pickedColor = pickColor(colors);
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var squares = document.querySelectorAll(".square");


updateSquares(colors);


resetButton.addEventListener("click", function(){
	colors = generateColors(numberOfSquares);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	updateSquares(colors);
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Color";
	messageDisplay.textContent = "";
});

function updateSquares(colors){
	for(var i = 0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			setAllColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent="Try Again!";
		}
	});
}
}



function setAllColor(setTo){
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = setTo;
	}

}

function pickColor(colors){
	var ran = Math.floor(Math.random() * colors.length);
	console.log(ran+colors[ran]);
	return colors[ran];
}


function generateColors(num){
	var colors = [];
	for (var i = 0; i < num; i++) {
		var ran1 = Math.floor(Math.random()*255 + 1);
		var ran2 = Math.floor(Math.random()*255 + 1);
		var ran3 = Math.floor(Math.random()*255 + 1);
		var color = "rgb("+ ran1+", "+ran2+", "+ran3+")";
		colors.push(color);
	}

	return colors;
}