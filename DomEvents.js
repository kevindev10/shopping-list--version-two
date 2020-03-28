
var _ = require('lodash');

var arrayAnimals =['ape','cat','dog','fish','snek','lizard']
//console.log(_);
console.log(_.without(arrayAnimals,'fish'));




var input =document.getElementById("userinput");
var button =document.getElementById("enter");
var ul  =document.querySelector("ul");


button.addEventListener("click",function(){
	if(input.value.length > 0){
		var li =document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

	}
	
})