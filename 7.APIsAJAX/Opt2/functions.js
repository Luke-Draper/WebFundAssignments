/*$(document).ready(function(){
// "<img src='http://pokeapi.co/media/sprites/pokemon/"+i+".png'>"
	var outhtml = "";
	for (var i=1; i<=151; ++i) {
		outhtml += "<img src='http://pokeapi.co/media/sprites/pokemon/"+i+".png'>"
	}
	$("#img-container").html(outhtml);
});*/
var pokemans = [];
$(document).ready(function(){
	$.get("https://pokeapi.co/api/v2/pokemon/12/", function(res) {
		pokemans.push(res);
		console.log(pokemans);
	}, "json");
	$.get("https://pokeapi.co/api/v2/pokemon/11/", function(res) {
		pokemans.push(res);
		console.log(pokemans);
	}, "json");
});