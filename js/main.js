$(document).ready(function() {
	var timeStart = 0;
	var timeEnd = 0;
	var timeInput = '';
	var hoursMinutes = 0;

	function displayHours(number) {
		timeInput += number;
		if (timeInput.slice(0,1) == 0) {
			timeInput = timeInput.slice(1);
			return '0';
		} else {
			return timeInput;		
		}
	};

	function displayMinutes(number) {
		timeInput += number;
		if (timeInput.slice(0,1) == 0) {
			timeInput = timeInput.slice(1);
			return '0';
		} else {
			return timeInput;		
		}
	};

	$('#hoursMinutes').on('click', function() {
		hoursMinutes == 0 ? hoursMinutes = 1 : hoursMinutes = 0;
		timeInput = '';
	});

	$('button').on('click', function() {
		if (($.isNumeric($(this).val())) && (hoursMinutes == 0)) {
			$('#hours').text(displayHours($(this).val()));
		} else if (($.isNumeric($(this).val())) && (hoursMinutes == 1)) {
			$('#minutes').text(displayMinutes($(this).val()));
		};
	});

	/*var i = 0;

	function addDigit(digit) {
		if ((i == 0) && ($.isNumeric(digit)) && (digit != 0)) {
			$('#display').text('0' + digit);
			i++;
		} else if ((i == 1) && ($.isNumeric(digit))) { 
			display = $('#display').text();
			display = display.substr(1);
			$('#display').text(display);
			$('#display').append(digit);
			i++;
		} else if ((i > 1) && ($.isNumeric(digit))) {
			$('#display').append(digit);
		}
	};
	
	$('button').on('click', function() {
		clicked_digit = $(this).val();
		console.log(clicked_digit);
		console.log($.isNumeric(clicked_digit));
		console.log('i=' + i);
		addDigit(clicked_digit);
	});
	*/

	/*
	$('button').click(function() {
		number = $(this).val();
		console.log(number);
		$('#display').append(number);
	});
	*/
});