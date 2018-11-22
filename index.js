function print_animation(target, string, delay) {
	window.setTimeout(function(){$(target).html(string)}, delay);
}

function transition_out(target) {
	$(target).css({'transition':'all 1s ease', 'overflow':'hidden'});
	$(target).css({'height':'75%', 'width':'75%'});
}

function transition_in(target) {
	$(target).css({'transition': 'all 1s ease', 'transform':'translate(150%, -150%)'});
	window.setTimeout(function(){$(target).css({'display':'none'})}, 1500)
	$('.main-content').css({'display':'block'});
}

function maincontent_in(target) {
	$(target).css({'transition': 'all 1s ease'});
	window.setTimeout(function(){$(target).css({"opacity": "1"})}, 1000);
}

$(document).ready(function(){
	string = "print(\"hello world\")"
	for (i=0; i <= string.length; i++) {
		print_animation(".print", string.slice(0,i), 200 * i)
	}
	window.setTimeout(function(){transition_out(".intro")}, 5000);
	window.setTimeout(function(){transition_in(".intro")}, 6000);
	window.setTimeout(function(){maincontent_in(".main-content h1")}, 7000)
	window.setTimeout(function(){maincontent_in(".main-content h2")}, 8000)
	window.setTimeout(function(){maincontent_in(".main-content h3")}, 9000)
	window.setTimeout(function(){maincontent_in(".main-content .navbar")}, 10000)
	window.setTimeout(function(){$('.page').show();$('body').css({'border-color':'black'}); $(".horizontal-line").show()}, 11000);
});

