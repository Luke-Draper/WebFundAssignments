$(document).ready(function(){
	$('img').hover(function(){
		var imgCurrent = $(this).attr("src");
		var altCurrent = $(this).attr("alt");
		var imgNext = $(this).attr("other-src");
		var altNext = $(this).attr("other-alt");
		$(this).attr("src",imgNext);
		$(this).attr("alt",altNext);
		$(this).attr("other-src",imgCurrent);
		$(this).attr("other-alt",altCurrent);
	}, function(){
		var imgCurrent = $(this).attr("src");
		var altCurrent = $(this).attr("alt");
		var imgNext = $(this).attr("other-src");
		var altNext = $(this).attr("other-alt");
		$(this).attr("src",imgNext);
		$(this).attr("alt",altNext);
		$(this).attr("other-src",imgCurrent);
		$(this).attr("other-alt",altCurrent);
	});
});