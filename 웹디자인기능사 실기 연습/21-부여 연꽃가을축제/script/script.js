$(function(){
  /* nav_con */
  $(".lnb>li").hover(function(){
    $(this).find("ul").stop().slideDown(400);
  }, function(){
    $(this).find("ul").stop().slideUp(400);
  });

  /* slide_con */
  var current=0;
  $(".main_slide").children("li:gt(0)").hide();

  setInterval(function(){
    var next=(current + 1) % 3;

    $(".main_slide").find("li").eq(current).fadeOut(500);
    $(".main_slide").find("li").eq(next).fadeIn(500);
    current=next;
  },3000);

  /* tab_con */
  $(".notice_gal h3").click(function(){
    $(".notice_gal h3, .notice_gal ul").removeClass("active");
    $(this).addClass("active");
    $(this).next("ul").addClass("active");
  });

  /* popup_con */
  $(".popup").click(function(){
    $(".modal").fadeIn();
  });
  $(".modal_inner button").click(function(){
    $(".modal").fadeOut();
  });
});