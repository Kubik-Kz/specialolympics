$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			 $(".success").addClass("show__form");
             $(".overlay").addClass("show__form");
             $(".overlay1").removeClass("show-block");
             $(".popup1").removeClass("show-block");
		});
		return false;
	});

});