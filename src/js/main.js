console.log('Hello world!');

$(document).ready(function() {
	console.log('ready');
	var headerHeight = $('header').height();
	console.log(headerHeight);
});

$(window).resize(function() {
	console.log('resize');
});

$(window).scroll(function() {
	var scrollAmount = $(window).scrollTop();
	if (scrollAmount > headerHeight) {
		$('header').css({
			'position': 'fixed'
		})
	} 
	console.log('scroll');
});

$( ".switch a" ).click(function(event) {
	event.preventDefault();
	var clickedOption = $(this).attr("class");
  	if(clickedOption=='topics'){
  		$('.headercontent.lawyers').hide();
  		$('.headercontent.topics').show();
  	}

  	if(clickedOption=='lawyers'){
  		$('.headercontent.topics').hide();
  		$('.headercontent.lawyers').show();
  	}

  	// add active class
  	$( ".switch a" ).removeClass( "active" );
  	$( ".switch a."+clickedOption ).addClass( "active" );


});

