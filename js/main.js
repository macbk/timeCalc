$(document).ready(function() {
	
	var $hours = $('span#hours');
	var $minutes = $('span#minutes');
	var field;
	//Default hours field is active
	var select = "h";
	$hours.css('color', '#2A9D8F');
	var input = "";
	var totalTime = "";

	$('button.btn-number').on('click', function() {
		if (select == "newTime") {
			select = "h";
			$hours.text('0');
			$minutes.text('00')
			$hours.css('color', '#2A9D8F');
			$minutes.css('color', '#a9d7d2');
			input = "";
		}
		select == "h" ? field = $hours : field = $minutes;
		field.text(getValue($(this).val()));
	});

	$('button.btn-select').on('click', function() {
		if (select == "h") {
			select = "m"
			$minutes.css('color', '#2A9D8F');
			$hours.css('color', '#a9d7d2');
		} else if (select == "m") {
			checkMinutes();
			select = "h";
			$hours.css('color', '#2A9D8F');
			$minutes.css('color', '#a9d7d2');
		}
		input = "";
	})

	$('button.btn-operator').on('click', function() {
		var operator = $(this).val();
		checkMinutes();
		$hours.css('color', '#2A9D8F');
		$minutes.css('color', '#2A9D8F');
		console.log(eval($hours.text()*60+'+'+$minutes.text()));
		select = "newTime";
		if (operator == "=") {
			calculate($hours.text()+':'+$minutes.text());
			//to sum
		} else {
			calculate($hours.text()+':'+$minutes.text()+operator);
		}
		
	});

	function getValue(number) {
		if (input.length == 0 && number == 0) {
			return 0;
		} else {
			input = input + number;
			return input;
		};
	};

	function checkMinutes() {
		if ($minutes.text() > 59) {
			var hoursDisplayed = $hours.text();
			var hoursToAdd = Math.floor($minutes.text()/60);
			var minToDisplay = $minutes.text() % 60;
			if (minToDisplay < 10) {
				minToDisplay = '0' + minToDisplay;
			}
			$hours.text(eval(hoursDisplayed+'+'+hoursToAdd));
			$minutes.text(minToDisplay);
		};
	};

	function calculate(time) {
		totalTime = totalTime + time;
		$('p#calculate').text(totalTime);
	};

	/*
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
	*/






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