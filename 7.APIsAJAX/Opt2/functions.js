$(document).ready(function(){
// "<img src='http://pokeapi.co/media/sprites/pokemon/"+i+".png'>"
	var outhtml = "";
	for (var i=1; i<=151; ++i) {
		outhtml += "<img src='http://pokeapi.co/media/sprites/pokemon/"+i+".png'>"
	}
	$("#img-container").html(outhtml);
});