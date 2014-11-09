$(function() {
  $(".content").hide();
  var flg = "close";
  $(".title").click(function(){
    $("div").click();
  });
  $("div").click(function(){
    $(this).next(".content").slideToggle();
      if(flg == "close"){
        flg = "open";
      }else{
        flg = "close";
      }
    });
});

