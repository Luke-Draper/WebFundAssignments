/*$(document).ready(function(){
// "<img src='http://pokeapi.co/media/sprites/pokemon/"+i+".png'>"
	var outhtml = "";
	for (var i=1; i<=151; ++i) {
		outhtml += "<img src='http://pokeapi.co/media/sprites/pokemon/"+i+".png'>"
	}
	$("#img-container").html(outhtml);
});*/
var urls = null;
var pokemans = [];
var ordered_pokemans = [];
$(document).ready(function(){
	$.get("https://pokeapi.co/api/v2/pokemon/", function(res) {
		urls = res;
		for (var i=0; i<urls.results.length; ++i) {
			$.get(urls.results[i].url, function(resb) {
				pokemans.push(resb);
			}, "json");
		}
	}, "json");
});
$( document ).ajaxComplete(function( event,request, settings ) {
	if (urls!=null&&pokemans.length>=urls.count) {
		console.log(pokemans);
	}
});
