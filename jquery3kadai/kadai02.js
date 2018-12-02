(function($, window) {
  $(function() {
    $('#login').on('click',checkEmail);
     function checkEmail(e) {
      var email = $('#email').val(),
          password = $('#password').val();
      // alert(email);
      // alert(password);
      alert(email);
      if (email == '') {
        alert('メールアドレスを入力してください');
      } else if (email.indexOf('@') < 0) {
        alert('メールアドレスには必ず「@」が必要です');
      }
      alert(password);
      if (password == '') {
        alert('パスワードを入力してください');
      } else if (password.length < 6) {
        alert('パスワードは6文字以上です');
      }
    };
  });
})(jQuery, window);
