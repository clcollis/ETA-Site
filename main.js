$( document ).ready(function() {
 $(".dropdown-nav").click(function(){
    $(".dropdown-nav").removeClass("active");
    $(this).addClass("active");
    $(".dropdown-nav").not(".active").children(".dropdown-content").slideUp("200");
    $(".dropdown-nav.active").children(".dropdown-content").slideDown("200");
  });

});
// above here is the accordion
