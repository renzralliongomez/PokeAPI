var currentPokemon = 1;
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var completeData = "";

var myOrigRequest = new XMLHttpRequest();
myOrigRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/1/');
myOrigRequest.onload = function (){
	var myData = JSON.parse(myOrigRequest.responseText);
	renderHTML(myData)
}

myOrigRequest.send();


next.addEventListener('click', function(){
	pokeball_Template = "";
	var myRequest = new XMLHttpRequest();
	myRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+currentPokemon+'/');
	myRequest.onload = function (){
		var myData = JSON.parse(myRequest.responseText);
		renderHTML(myData)

	}
	myRequest.send();

	if(currentPokemon < 649){
		currentPokemon++;
	}else if (currentPokemon == 649){
		currentPokemon = 1;
	}

	var pokeball = document.getElementById("pokeball");
	pokeball.innerHTML = completeData;
});

prev.addEventListener('click', function(){
	pokeball_Template = "";
	var myRequest = new XMLHttpRequest();
	myRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+currentPokemon+'/');
	myRequest.onload = function (){
		var myData = JSON.parse(myRequest.responseText);
		renderHTML(myData)

	}
	myRequest.send();

	if(currentPokemon > 1){
		currentPokemon--;
	}else if (currentPokemon == 1){
		currentPokemon = 649;
	}

	var pokeball = document.getElementById("pokeball");
	pokeball.innerHTML = completeData;
});

function renderHTML(pokeData){
	var rawTemplate = document.getElementById("pokeball_Template").innerHTML;
	var compiledTemplate = Handlebars.compile(rawTemplate);
	var generatedHTML = compiledTemplate(pokeData);

	completeData = generatedHTML;

	console.log(completeData);

	var pokeball = document.getElementById("pokeball");
	pokeball.innerHTML = completeData;
}
