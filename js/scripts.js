$(function(){
	$('.carousel').carousel({
  interval: false
});
	$(".main-menu i.glyphicon-search").on("click", function(){

        $(".main-menu div.posInput").toggle();
	})
	$(window).resize(function(){
            if($(window).width() > 975)
          $(".main-menu div.posInput").show();
               
       });
});