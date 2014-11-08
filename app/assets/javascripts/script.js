$(function() {
  $(".question").hide();
  $(".answer").hide();
  var flg = "close";
  $(".title").click(function(){
    $(".pv").click().next(".question").next(".answer").click();
  });
  $(".pv").click(function() {
    $(this).next(".question").slideToggle().next(".answer").slideToggle();
      if(flg == "close"){
        flg = "open";
      }else{
        flg = "close";
      }
  });
});
