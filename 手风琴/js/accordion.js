$(function() {
	$('ul li').mouseenter(function() {
		$(this).stop(true).animate({"width":560 + "px"},500)
		.siblings().stop(true).animate({"width":85 + "px"},500);
	});
})