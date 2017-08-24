$(document).ready(function(){
    "use strict";
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items:1, loop:true, mouseDrag:false, nav:true, autoplay:true, autoplayTimeout:3000,
        autoplayHoverPause:true, autoplaySpeed: 650, dotsSpeed:650, navSpeed:650
    });
    $("footer").css("top",($("body").height-$("footer").height)+"px");
    $("#menu-button").click(function(){
        $("#menu-panel").slideToggle('medium',function(){
            if($(this).is(":visible"))
               $(this).css("display","flex");
        });
    })
});