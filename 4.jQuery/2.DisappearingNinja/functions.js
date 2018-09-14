$(document).ready(function(){
	$('button').click(function(){
		$('img').show();
	});
	$('img').click(function(){
		$(this).fadeOut();
	});
});