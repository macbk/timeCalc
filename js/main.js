$(document).ready(function() {
	var number = "";
	$('button').click(function() {
		number = $(this).val();
		console.log(number);
		$('#display').append(number);
	});
	
});