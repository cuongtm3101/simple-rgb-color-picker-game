var numSquare = 6;
var colors = generateRandomColor(numSquare);  
var square = document.querySelectorAll(".square"); 
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var pickedColor = pickColor(); 
var h1 = document.querySelector("h1")
var resetButton = document.getElementById("resetButton");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
colorDisplay.textContent = pickedColor;
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	numSquare = 3;
	colors = generateRandomColor(numSquare);
	pickedColor = pickColor();
	
	
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for (var i = 0; i < square.length; i++) {
		
		if(colors[i]){
			square[i].style.backgroundColor = colors[i];
			
		}else {
			square[i].style.display = 'none';
		}
	}
})
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove('selected');
	hardBtn.classList.add('selected');
	numSquare = 6
	colors = generateRandomColor(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for (var i = 0; i < square.length; i++) {
			
			square[i].style.backgroundColor = colors[i];
				
			square[i].style.display = 'block';
	}
})

resetButton.addEventListener("click", function(){
	colors = generateRandomColor(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors"
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

for (var i = 0; i < square.length; i++) {
	square[i].style.backgroundColor = colors[i];
	square[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			console.log(this);
			messageDisplay.textContent = "CORRECT!"
			this.style.backgroundColor = pickedColor;
			changeColor(clickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again!";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!"
		}
	})
}


function changeColor(color){
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}

function generateRandomColor(num){
	
	var arr = []
	
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}















































































