$(function(){
  /* nav_con */
  $(".lnb>li").mouseover(function(){
    $(this).find("ul").stop().slideDown(500);
  });

  $(".lnb>li").mouseout(function(){
    $(this).find("ul").stop().slideUp(500);
  });

  /* slide_con */
  var current=0;

  setInterval(function(){
    if(current < 2){
      current++;
    }else{
      current=0;
    }

    var slidePosition= current * (-800) + "px";
    $(".main_slide").animate({left:slidePosition},500);
  },3000);

  /* tab_con */
  $(".notice_gal h3").click(function(){
    $(".notice_gal h3, .notice_gal ul").removeClass("active");
    $(this).addClass("active");
    $(this).next("ul").addClass("active");
  });

  /* modal_popup_con */
  $(".popup").click(function(){
    $(".modal").fadeIn(500);
  });

  $(".modal_inner").click(function(){
    $(".modal").fadeOut(500);
  });

});