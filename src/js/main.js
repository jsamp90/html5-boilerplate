console.log('Hello world!');

var headerHeight = null;
var contentclicked = null;

$(document).ready(function() {
	console.log('ready');
	headerHeight = $('header').height();
	console.log(headerHeight);
	$('.practice-area').show();
	$('.topics-area').hide();
	$('.countries').hide();
	$('.names').hide();
});

$(window).resize(function() {
	console.log('resize');
});

// $(window).scroll(function() {
// 	var scrollAmount = $(window).scrollTop();
// 	if (scrollAmount > headerHeight) {
// 		$('header').css({
// 			'position': 'fixed'
// 		})
// 	} 
// 	console.log('scroll');
// });

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

$( ".switchcontent a" ).click(function(event) {
	event.preventDefault();
	contentclicked = $(this).attr('class');
	console.log(contentclicked);
	if(contentclicked === 'bypractice-area'){
		$('.practice-area').show();
		$('.topics-area').hide();
		$('.countries').hide();
		$('.names').hide();
	}

	if(contentclicked === 'bycountry'){
		$('.practice-area').hide();
		$('.topics-area').hide();
		$('.countries').show();
		$('.names').hide();
	}

	if(contentclicked === 'byname'){
		$('.practice-area').hide();
		$('.topics-area').hide();
		$('.countries').hide();
		$('.names').show();
	}

	if(contentclicked === 'bytopic'){
		$('.practice-area').hide();
		$('.topics-area').show();
		$('.countries').hide();
		$('.names').hide();
	}

});

