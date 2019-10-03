$(document).ready(function() {
    $('.login-form').hide();

    $('.signup-form a.show-login-form').click(function(){
        $('.signup-form').hide("slide", { direction: "right" }, 400);
        $('.login-form').delay(400).fadeIn(300);
      });
      $('.login-form a.show-signup-form').click(function(){
        $('.login-form').hide("slide", { direction: "left" }, 400);
        $('.signup-form').delay(400).fadeIn(300);
      });
});