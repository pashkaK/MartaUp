document.querySelector('.swiper-wrapper').addEventListener('click', function(event) {
    if (event.target.className != 'swiper-slide__btn') return;
    $('.form-active').fadeIn(500)
    $('.form__overlay').fadeIn(600)
})
    


$(document).ready(function() {
	$('.form__overlay').on('click', () => {
		$('.form-active').fadeOut(500)
		$('.form__overlay').fadeOut(600)
		setTimeout($('.form-active').fadeOut(500), 2500)
	})
	function formRezult () {
		$('.form__message-rezult').fadeOut(500);
		$('.form__overlay').fadeOut(600);
	}

	$("#telephone").mask("0(99) 999-9999");

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.form-active').fadeOut(100);
			$('.form__message-rezult').fadeIn(300)
			setTimeout(formRezult, 2500)
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


