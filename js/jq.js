$(function(){
	/$('body').fadeIn(500);/
	$('.fitvids').fitVids();
	jQuery('a[href^=http]')
　　　　.not('[href*="'+location.hostname+'"]')
　　　　.attr({target:"_blank"});

 $('.head_scroll').function(){
	 /*どのくらいスクロールしたら実行するか この例では15以上*/
   if ($(window).scrollTop() >= 15) {

     /*15以上スクロールした時のアクション*/
     $(".head_scroll").addClass("header_border");
   } else {

     /*15以上スクロールしていない時のアクション*/
     $(".head_scroll").removeClass("header_border")
   }
 }

});
