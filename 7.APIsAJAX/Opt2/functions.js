var urls = null;
var pokemans = [];
var ordered_pokemans = [];
var ordered = false;
function updatePokedex(index) {
	var poke = ordered_pokemans[index];
	$('#pokedex-container').attr('index', index);
	$('#pokedex-container img').attr('src', poke.sprites.front_default);
	$('#pokedex-container img').attr('alt', poke.name);
	var name_text = poke.name;
	name_text = name_text.toLowerCase().split('-').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
	$('#name').html(name_text);
	$('#id').html(poke.id);
	var type_text = "";
	if (poke.types.length==1) {
		type_text+=poke.types[0].type.name;
	} else {
		if (poke.types[0].slot == 1) {
			type_text+=poke.types[0].type.name + ",-" + poke.types[1].type.name;
		} else {
			type_text+=poke.types[1].type.name + ",-" + poke.types[0].type.name;
		}
	}
	type_text = type_text.toLowerCase().split('-').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
	$('#type').html(type_text);
	$('#height').html((poke.height/10)+" m");
	$('#weight').html((poke.weight/10)+" kg");
}
$(document).ready(function(){
	$.get("https://pokeapi.co/api/v2/pokemon/", function(res) {
		urls = res;
		for (var i=0; i<urls.results.length; ++i) {
			$.get(urls.results[i].url, function(resb) {
				pokemans.push(resb);
			}, "json");
		}
	}, "json");
	$('.pokemon').click(function(){
		if (ordered) {
			updatePokedex($(this).attr('index'));
		}
	});
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
