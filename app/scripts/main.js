$(document).ready(function() {
	/*$('#btn-form').click(function() {
		$('#mail').attr({
			placeholder: 'value2'
		});
	});*/

	if ( $('.data-text label').css('display') === 'none' ) {
		$('#mail').attr({
			placeholder: 'Email*'
		});
		$('#pass').attr({
			placeholder: 'Пароль*'
		});
	}

	$(window).resize(function(){
		if ($(window).width() <= 590){	
			$('#mail').attr({
				placeholder: 'Email*'
			});
			$('#pass').attr({
				placeholder: 'Пароль*'
			});
		} else {
			$('#mail, #pass').attr({
				placeholder: ''
			});
		}
	});

	$('.mob-btn').click(function() {
		$('.menu').slideToggle('fast');
	});

	$(window).resize(function(){
		if ($(window).width() > 590){	
			$('.menu').css('display', 'block');
		} else {
			$('.menu').css('display', 'none');
		}
	});

});
