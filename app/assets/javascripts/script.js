$(function() {
  // オプションのproximityでbottom.jsを発生する位置を指定する
  $(window).bottom({proximity: 0.05});
  $(window).bind('bottom', function() {
      var obj = $(this);
      // 「loading」がfalseの時に実行
      if (!obj.data('loading')) {
      // 「loading」をtrueにする
      obj.data('loading', true);
      // ローディング画像を表示
      $('#loadimg').html('<img src="./../../assets/images/ajax-loader.gif" />');
      // 追加したい処理を記述
      setTimeout(function() {
          // ローディング画像を削除
          $('#loadimg').html('');
          // 追加するHTMLを指定
          $('#summary').append('<div class="topic"><h2 class="title">notepad++で、PHPファイルの自動的終了htmlタグを有効にするにはどうしたらいいですか</h2><p class="pv">100pv</p>      <p class="question"><span>Question</span><br>notepad++を使用するときに、PHPファイルでhtmlタグを自動的に終了するにはどうすればいいでしょうか？notepad++を使用するときに、PHPファイルでhtmlタグを自動的に終了するにはどうすればいいでしょうか？htmlとxmlファイルでできるのですが(TextFXプラグインでできると思います)、PHPファイルだと上手くいきませんでした。PHPファイルで自動的終了タグを有効化するプラグイン(または組み込まれた機能)はありますか？</p><p class="answer"><span>Answer</span><br>少し面倒な作業になってしまうのですが、 最初はHTMLにして、終わってからPHPに切り替えるというのはどうでしょうか。</p><p class="answer"><span>Answer</span><br>少し面倒な作業になってしまうのですが </div>');
  $(".question").hide();
  $(".answer").hide();
  var flg = "close";
  $(".title").click(function(){
    $(this).next(".question").slideToggle().next(".answer").slideToggle();
      if(flg == "close"){
        flg = "open";
      }else{
        flg = "close";
      }
  });

          // 処理が完了したら「loading」をfalseにする
          obj.data('loading', false);
          }, 1500);
      }
  });
  // リロードしたときにページの先頭を表示する
  $('html,body').animate({ scrollTop: 0 }, '1');

  $(".question").hide();
  $(".answer").hide();
  var flg = "close";
  $(".title").click(function(){
    $(".question").slideToggle().next(".answer").slideToggle();
      if(flg == "close"){
        flg = "open";
      }else{
        flg = "close";
      }
  });

});
