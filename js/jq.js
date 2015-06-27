$(function(){
	/$('body').fadeIn(500);/
	$('.fitvids').fitVids();
	jQuery('a[href^=http]')
　　　　.not('[href*="'+location.hostname+'"]')
　　　　.attr({target:"_blank"});

});