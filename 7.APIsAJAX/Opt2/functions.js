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
var ordered = false;
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
$(document).ajaxComplete(function() {
	if (!ordered&&urls!=null&&pokemans.length>=urls.count) {
		var next_order=0;
		while(ordered_pokemans.length<pokemans.length && next_order<=1000) {
			for (var i=0; i<pokemans.length; ++i) {
				if (pokemans[i].order!=null) {
					if (pokemans[i].order == next_order) {
						if (pokemans[i].sprites.front_default!=null) {
							ordered_pokemans.push(pokemans[i]);
						}
					}
				}
			}
			next_order++;
		}
		ordered = true;
		/*var outhtml = "";
		for (var i=0; i<ordered_pokemans.length; ++i) {
			outhtml += "<img src='"+ordered_pokemans[i].sprites.front_default+
			"' id='"+ordered_pokemans[i].name+
			"' alt='"+ordered_pokemans[i].name+
			"' index='"+i+"' class='pokemon'>";
		}
		$("#image-container").html(outhtml);*/
	}
});
