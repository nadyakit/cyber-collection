$(document).ready(function(){
  $('.center_jaba_s1').click(
    function(){
      $('.center_jaba_s1').toggleClass('.center_jaba_s2').removeClass('.center_jaba_s1');
    },
    function(){
        $('.center_jaba_s2').css('visibility', 'visible')
        $('.center_jaba_s1').css('visibility', 'hidden')
      },
    );
  }
