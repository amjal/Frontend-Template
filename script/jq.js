$(document).ready(function(){
    "use strict";
    $("#menu-button").click(function(){
        $("#menu-panel").slideToggle('medium',function(){
            if($(this).is(":visible"))
               $(this).css("display","flex");
        });
    })
});