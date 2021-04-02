
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

    setInterval(fade, 120);
  },
);
})
