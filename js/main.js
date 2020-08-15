var currentPokemon = 1;
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var pokeball = document.getElementById("pokeball");

var myOrigRequest = new XMLHttpRequest();
myOrigRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/1/');
myOrigRequest.onload = function (){
	var myOrigData = JSON.parse(myOrigRequest.responseText);
	renderHTML(myOrigData)
}

myOrigRequest.send();


next.addEventListener('click', function(){

	if(currentPokemon < 649){
		currentPokemon++;
	}else if (currentPokemon == 649){
		currentPokemon = 1;
	}

	pokeball.innerHTML = "";

	var myRequest = new XMLHttpRequest();
	myRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+currentPokemon+'/');
	myRequest.onload = function (){

		var myData = JSON.parse(myRequest.responseText);
		renderHTML(myData);

	}
	myRequest.send();

});

prev.addEventListener('click', function(){

	if(currentPokemon > 1){
		currentPokemon--;
	}else if (currentPokemon == 1){
		currentPokemon = 649;
	}

	var myRequest = new XMLHttpRequest();
	myRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+currentPokemon+'/');
	myRequest.onload = function (){

		var myData = JSON.parse(myRequest.responseText);
		renderHTML(myData);

	}
	myRequest.send();

});

function renderHTML(pokeData){
	pokeball.innerHTML = "";

	var rawTemplate = document.getElementById("pokeball_Template").innerHTML;
	var compiledTemplate = Handlebars.compile(rawTemplate);
	var generatedHTML = compiledTemplate(pokeData);

	pokeball.innerHTML = generatedHTML;
}
