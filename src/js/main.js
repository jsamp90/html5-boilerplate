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

$( ".switchcontent a" ).click(function(event) {
	event.preventDefault();
	var contentclicked = $(this).attr("class");
	if(contentclicked=='practice-area'){
		$('.legalcontent.practicearea').show();
		$('.legalcontainer-sections.practice-area').show();
		$('.legalcontent.country').hide();
		$('.legalcontainer-sections.countries').hide();
		$('.legalcontent.name').hide();
		$('.legalcontent.topic').hide();
		$('.legalcontainer-sections.topics-area').hide();
	}

	if(contentclicked=='country'){
		$('.legalcontent.practicearea').hide();
		$('.legalcontainer-sections.practice-area').hide();
		$('.legalcontent.country').show();
		$('.legalcontainer-sections.countries').show();
		$('.legalcontent.name').hide();
		$('.legalcontent.topic').hide();
		$('.legalcontainer-sections.topics-area').hide();
	}

	if(contentclicked=='name'){
		$('.legalcontent.practicearea').hide();
		$('.legalcontainer-sections.practice-area').hide();
		$('.legalcontent.country').hide();
		$('.legalcontainer-sections.countries').hide();
		$('.legalcontent.name').show();
		$('.legalcontent.topic').hide();
		$('.legalcontainer-sections.topics-area').hide();
	}

	if(contentclicked=='topic'){
		$('.legalcontent.practicearea').hide();
		$('.legalcontainer-sections.practice-area').hide();
		$('.legalcontent.country').hide();
		$('.legalcontainer-sections.countries').hide();
		$('.legalcontent.name').hide();
		$('.legalcontent.topic').show();
		$('.legalcontainer-sections.topics-area').show();
	}

	$( ".switch a" ).removeClass( "active" );
  	$( ".switch a."+contentclicked ).addClass( "active" );
});

