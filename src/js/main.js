console.log('Hello world!');

$(document).ready(function() {
	console.log('ready');
	var headerHeight = $('header').height():
	console.log(headerHeight);
});

$(window).resize(function() {
	console.log('resize');
});

$(window).scroll(function() {
	console.log('scroll');
});