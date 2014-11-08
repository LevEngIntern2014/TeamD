$(function() {
  $(".contents").hide();
  var flg = "close";
  $(".title").click(function(){
    $(this).next(".contents").slideToggle();
      if(flg == "close"){
        flg = "open";
      }else{
        flg = "close";
      }
    });
  });
