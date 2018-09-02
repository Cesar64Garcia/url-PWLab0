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


arrChange = [false,false,false,false];
function changeStyle(lngOption){
	switch(lngOption){
		case 1:{
			if(arrChange[lngOption-1]){
				document.body.style.fontFamily = ''
			} else {
				document.body.style.fontFamily = 'Orbitrion'
			}
			break;
		}
		case 2:{
			var arrElements = document.getElementsByClassName('custom-title');
			if(arrChange[lngOption-1]){
				document.body.style.backgroundColor = 'rgb(255,255,255)';
				document.body.style.color = 'rgb(0,0,0)';

				Array.prototype.forEach.call(arrElements, function(el) {
					el.style.color = 'rgb(90,0,0)'
				});
			} else {
				document.body.style.backgroundColor = 'rgb(0,0,0)'
				document.body.style.color = 'rgb(255,255,255)'

				Array.prototype.forEach.call(arrElements, function(el) {
					el.style.color = 'rgb(255,0,0)'
				});
			}
			break;
		}
		case 3:{
			var arrElements = document.getElementsByClassName('text-layer');
			if(arrChange[lngOption-1]){
				document.getElementById('home').style.backgroundImage = 'url(img/principal.jpg)'
				Array.prototype.forEach.call(arrElements, function(el) {
					el.classList.remove('text-right');
					el.classList.add('text-left');
				});

				document.getElementById('second-layer').innerHTML = 'MY NAME IS BARRY ALLEN AND'
				document.getElementById('third-layer').innerHTML = 'MAN ALIVE'
			} else {
				document.getElementById('home').style.backgroundImage = 'url(img/reverse.jpg)'
				Array.prototype.forEach.call(arrElements, function(el) {
					el.classList.remove('text-left');
					el.classList.add('text-right');
				});
				
				document.getElementById('second-layer').innerHTML = 'MY NAME IS EOBARD TOME AND'
				document.getElementById('third-layer').innerHTML = 'MAN IN THE TIMELINE'
			}
			break;
		}
		case 4:{
			var arrElements = document.getElementsByClassName('custom-title');
			if(arrChange[lngOption-1]){
				document.body.style.fontSize = '1em';

				Array.prototype.forEach.call(arrElements, function(el) {
					el.style.fontSize = '2.5em'
				});
			} else {
				document.body.style.fontSize = '1.5em';

				Array.prototype.forEach.call(arrElements, function(el) {
					el.style.fontSize = '3em'
				});
			}
			break;
		}
		case 5:{
			if(arrChange[lngOption-1]){
				document.getElementById('navbar').style.backgroundColor = 'rgba(196,0,0,0)'
			} else {
				document.getElementById('navbar').style.backgroundColor = 'rgba(196,0,0,1)'
			}
			break;
		}
	}
	arrChange[lngOption-1] = !arrChange[lngOption-1];
}

