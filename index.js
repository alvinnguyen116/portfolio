function print_animation(target, string, delay) {
	window.setTimeout(function(){$(target).html(string)}, delay);
}

function transition_out(target) {
	$(target).css({'transition':'all 1s ease', 'overflow':'hidden'});
	$(target).css({'height':'90vh', 'width':'90vw'});
}

function transition_in(target) {
	$(target).css({'transition': 'all 1s ease', 'transform':'translate(150%, -150%)'});
	window.setTimeout(function(){$(target).css({'display':'none'})}, 1500)
	$('.main-content').css({'display':'flex'});
}

function maincontent_in(target) {
	$(target).css({'transition': 'all 1s ease'});
	window.setTimeout(function(){$(target).css({"opacity": "1"})}, 1000);
}

var seva_open = false;
var ch_open = false;
var pp_open = false;
var seva_btn = -90; 
var ch_btn = -90;
var pp_btn = -90;
function project_onClick(btn,text) {
	let svg = btn + " svg"
	if (btn == "#seva-btn") {
		seva_btn += 180;
		if (!seva_open) {
			$(btn).css({"border-radius":"0","width":"100%", "display":"flex", "justify-content":"center", "margin":"20px 0px"});
			$(text).css({"display":"unset"});
			window.setTimeout(function(){
				$(text).css({"opacity":"1"});
			}, 1000);
		} else {
			$(btn).css({"border-radius":"20px","width":"500px", "margin":"20px 8%"});
			$(text).css({"opacity":"0"});
			window.setTimeout(function(){
				$(text).css({"display": "none"});
			}, 1000);
		}
		$(svg).css({"transform":"rotate(" + seva_btn+ "deg)"});
		seva_open = !seva_open;
	} else if (btn == "#ch-btn") {
		ch_btn += 180;
		if (!ch_open) {
			$(btn).css({"border-radius":"0","width":"100%", "display":"flex", "justify-content":"center", "margin":"20px 0px"});
			$(text).css({"display":"unset"});
			window.setTimeout(function(){
				$(text).css({"opacity":"1"});
			}, 1000);
		} else {
			$(btn).css({"border-radius":"20px","width":"500px", "margin":"20px 8%"});
			$(text).css({"opacity":"0"});
			window.setTimeout(function(){
				$(text).css({"display": "none"});
			}, 1000);
		}
		$(svg).css({"transform":"rotate(" + ch_btn+ "deg)"});
		ch_open = !ch_open;
	}  else if (btn == "#pp-btn") {
		pp_btn += 180;
		if (!pp_open) {
			$(btn).css({"border-radius":"0","width":"100%", "display":"flex", "justify-content":"center", "margin":"20px 0px"});
			$(text).css({"display":"unset"});
			window.setTimeout(function(){
				$(text).css({"opacity":"1"});
			}, 1000);
		} else {
			$(btn).css({"border-radius":"20px","width":"500px", "margin":"20px 8%"});
			$(text).css({"opacity":"0"});
			window.setTimeout(function(){
				$(text).css({"display": "none"});
			}, 1000);
		}
		$(svg).css({"transform":"rotate(" + pp_btn+ "deg)"});
		pp_open = !pp_open;
	}
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

$(document).ready(function(){
	string = "print(\"hello world\")"
	for (i=0; i <= string.length; i++) {
		print_animation(".print", string.slice(0,i), 100 * i)
	}
	window.setTimeout(function(){transition_out(".intro")}, 3000);
	window.setTimeout(function(){transition_in(".intro")}, 3500);
	window.setTimeout(function(){maincontent_in(".main-content .anim-1")}, 3500)
	window.setTimeout(function(){maincontent_in(".main-content .anim-2")}, 4000)
	window.setTimeout(function(){maincontent_in(".main-content .anim-3")}, 4500)
	window.setTimeout(function(){maincontent_in(".main-content .navbar")},5000)
	window.setTimeout(function(){$('body').css({'border-color':'black'}); $(".horizontal-line").show(); $(".main-content").css({"position":"relative"})}, 6000);
	window.setTimeout(function(){$('.page').css({"opacity":"1"})}, 6500);
});

