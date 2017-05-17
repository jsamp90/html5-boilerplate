console.log('Hello world!');

var headerHeight = null;
var contentclicked = null;

$(document).ready(function() {
	console.log('ready');
	headerHeight = $('header').height();
	console.log(headerHeight);
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
	if(contentclicked === 'practice-area'){
		$('.legalcontainer-sections.practice-area').show();
		$('.legalcontainer-sections.topics-area').hide();
		$('.legalcontainer-sections.countries').hide();
		$('.legalcontainer-sections.name').hide();
	}

	if(contentclicked === 'country'){
		$('legalcontainer-sections .practice-area').hide();
		$('legalcontainer-sections .topics-area').hide();
		$('legalcontainer-sections .countries').show();
		$('legalcontainer-sections .name').hide();
	}

	if(contentclicked === 'name'){
		$('legalcontainer-sections .practice-area').hide();
		$('legalcontainer-sections .topics-area').hide();
		$('legalcontainer-sections .countries').hide();
		$('legalcontainer-sections .name').show();
	}

	if(contentclicked === 'topic'){
		$('legalcontainer-sections .practice-area').hide();
		$('legalcontainer-sections .topics-area').show();
		$('legalcontainer-sections .countries').hide();
		$('legalcontainer-sections .name').hide();
	}

});

