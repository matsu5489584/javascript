(function($, window) {
  $(function() {
    // この中に処理を書きます
    $('#index').find('li').each(function() {
        // ループ内の処理
      var count = $(this).text().length;
      $(this).text($(this).text()+' [' + count  + '文字]');
      });
  });
})(jQuery, window);
