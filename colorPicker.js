var colors = generanteRandomColors(6);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var numberOfSquares = 6;
var messageDisplay = document.getElementById("message");

var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.getElementById("reset");
var easybtn = document.getElementById("easybtn");
var hardbtn = document.getElementById("hardbtn");

easybtn.addEventListener("click",function(){
	//alert("easy button clicked!!");
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numberOfSquares = 3;
	colors = generanteRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "#232323";
});


hardbtn.addEventListener("click",function(){
	//alert("easy button clicked!!");
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numberOfSquares = 6;
	colors = generanteRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++){
		
			squares[i].style.background = colors[i];
		
			squares[i].style.display = "block";
		
	}
	h1.style.background = "#232323";
	message = "none";
});


var h1 = document.getElementById("h1");
colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click",function(){
	//alert("connected!!");
	colors = generanteRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0;i<colors.length;i++){
		squares[i].style.background = colors[i];
		squares[i].style.background = "block";
	}
	h1.style.background = "#232323";
	messageDisplay.textContent = "";

});
for(var i=0;i<squares.length;i++){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		//alert("clicked");
		var clickedColor = this.style.backgroundColor;
		if(clickedColor===pickedColor){
			//alert("correct");
			messageDisplay.textContent = "Correct";
			changeColor(clickedColor);
			h1.style.background = pickedColor;
			resetButton.textContent = "Play Again";


		}
		else
		{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}

	});

}
function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generanteRandomColors(num){
	var arr = [];

	for(var i=0;i<num;i++){
		arr.push(reandomColor());
	}
	return arr;
}

function reandomColor()
{
	var r = Math.floor(Math.random()*256);

	var g = Math.floor(Math.random()*256);

	var b = Math.floor(Math.random()*256);

	var str = "rgb("+r+", "+g+", "+b+")";

	return str;
}
