$(document).ready(function(){

	$('#click button').click(function(){
		console.log("Click");
	});
	$('#hide button').click(function(){
		$('#hide span').hide();
	});
	$('#show button').click(function(){
		$('#hide span').show();
	});
	$('#toggle button').click(function(){
		$('#toggle span').toggle();
	});
	$('#slideDown button').click(function(){
		$('#slideDown p').hide();
		$('#slideDown p').slideDown();
	});
	$('#slideUp button').click(function(){
		$('#slideUp p').slideUp(400, function () {
			$(this).show()
		});
	});
	$('#slideToggle button').click(function(){
		$('#slideToggle p').slideToggle();
	});
	$('#fadeOut button').click(function(){
		$('#fadeOut p').fadeOut(400, function () {
			$(this).show()
		});
	});
	$('#fadeIn button').click(function(){
		$('#fadeIn p').hide();
		$('#fadeIn p').fadeIn();
	});
	$('#addClass button').click(function(){
		$('#addClass p').addClass('red');
	});
	$('#before button').click(function(){
		$('#before p').before("<span>Before </span>");
	});
	$('#after button').click(function(){
		$('#after p').after("<span>After </span>");
	});
	$('#append button').click(function(){
		$('#append p').append(" Append.");
	});
	$('#html button').click(function(){
		$('#html p').html("<strong>HTML</strong>");
	});
	$('#attr button').click(function(){
		console.log($('#attr p').attr('id'));
	});
	$('#val button').click(function(){
		console.log($('#val textarea').val());
	});
	$('#text button').click(function(){
		$('#text p').text("Text");
	});

});