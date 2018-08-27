$(function () { 
	$('.scroll-down').click(function (event) {
		var hash = this.hash; 
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
		});
	}); 

	function validateScroll(){
		if($(window).scrollTop() > 100){
			if($('#navbar').hasClass('custom-nav')){
				$('#navbar').removeClass('custom-nav');
				$('#navbar').addClass('custom-nav-dark');
			}
		} else {
			if($('#navbar').hasClass('custom-nav-dark')){
				$('#navbar').removeClass('custom-nav-dark');
				$('#navbar').addClass('custom-nav');
			}
		}
	}

	$(window).scroll(function() {
		validateScroll();
	});

	validateScroll();
}); 

