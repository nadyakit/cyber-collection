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
    $('.center_jaba_s2').click(
        function(){
            $('.center_jaba_s2').toggleClass('.center_jaba_s1').removeClass('.center_jaba_s2');
        },
        function(){
            $('.center_jaba_s1').css('visibility', 'visible')
            $('.center_jaba_s2').css('visibility', 'hidden')
        },
    );

  })

$(document).ready(function(){
  $('.center_jaba2_s1').click(
    function(){
      $('.center_jaba2_s1').toggleClass('.center_jaba2_s2').removeClass('.center_jaba2_s1');
    },
    function(){
        $('.center_jaba2_s2').css('visibility', 'visible')
        $('.center_jaba2_s1').css('visibility', 'hidden')
      },
    );
    $('.center_jaba2_s2').click(
        function(){
            $('.center_jaba2_s2').toggleClass('.center_jaba2_s1').removeClass('.center_jaba2_s2');
        },
        function(){
            $('.center_jaba2_s1').css('visibility', 'visible')
            $('.center_jaba2_s2').css('visibility', 'hidden')
        },
    );

  })
$(document).ready(function(){
  $('.center_jaba3_s1').click(
    function(){
      $('.center_jaba3_s1').toggleClass('.center_jaba3_s2').removeClass('.center_jaba3_s1');
    },
    function(){
        $('.center_jaba3_s2').css('visibility', 'visible')
        $('.center_jaba3_s1').css('visibility', 'hidden')
      },
    );
    $('.center_jaba3_s2').click(
        function(){
            $('.center_jaba3_s2').toggleClass('.center_jaba3_s1').removeClass('.center_jaba3_s2');
        },
        function(){
            $('.center_jaba3_s1').css('visibility', 'visible')
            $('.center_jaba3_s2').css('visibility', 'hidden')
        },
    );

  })

$(document).ready(function(){
  $('.center_jaba4_s1').click(
    function(){
      $('.center_jaba4_s1').toggleClass('.center_jaba4_s2').removeClass('.center_jaba4_s1');
    },
    function(){
        $('.center_jaba4_s2').css('visibility', 'visible')
        $('.center_jaba4_s1').css('visibility', 'hidden')
      },
    );
    $('.center_jaba4_s2').click(
        function(){
            $('.center_jaba4_s2').toggleClass('.center_jaba4_s1').removeClass('.center_jaba4_s2');
        },
        function(){
            $('.center_jaba4_s1').css('visibility', 'visible')
            $('.center_jaba4_s2').css('visibility', 'hidden')
        },
    );

})
$(document).ready(function(){
    $('.center_jaba5_s1').click(
      function(){
        $('.center_jaba5_s1').toggleClass('.center_jaba5_s2').removeClass('.center_jaba5_s1');
      },
      function(){
        $('.center_jaba5_s2').css('visibility', 'visible')
        $('.center_jaba5_s1').css('visibility', 'hidden')
      },
    );
    $('.center_jaba5_s2').click(
      function(){
          $('.center_jaba5_s2').toggleClass('.center_jaba5_s1').removeClass('.center_jaba5_s2');
      },
      function(){
          $('.center_jaba5_s1').css('visibility', 'visible')
          $('.center_jaba5_s2').css('visibility', 'hidden')
      },
    );
})

$(document).ready(function(){
  $('.knopka').click(
      function(){
        opacity=0
        var increase=1
        var decrease=0

      function fade(){
          if (opacity<1&&increase)
            opacity+=0.20
            else{
              increase=0
              decrease=1
            }

          if (opacity>0&&decrease)
            opacity-=0.18
            else{
              increase=1
              decrease=0
            }

  document.getElementByClass('.stars34').style.opacity=opacity
            }

    setInterval("fade()",120)
