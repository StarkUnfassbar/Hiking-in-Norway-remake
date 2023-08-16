var animationExecuted = false;

$(".block-5").waypoint(function() {
  if (!animationExecuted) {
    $({blurRadius: 5}).animate({blurRadius: 0}, {
        duration: 1800,
        easing: 'swing',
        step: function() {
          $(".heading_count").css({
            "-webkit-filter": "blur("+this.blurRadius+"px)",
            "filter": "blur("+this.blurRadius+"px)"
          });
        }
      });
      var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
      $(".heading_count").each(function() {
        var tcount = $(this).data("count");
        $(this).animateNumber({ number: tcount,
          easing: 'easeInQuad',
          "font-size": "calc(var(--sizeindex) * 4)",
          numberStep: comma_separator_number_step},
          1800);
    });

    animationExecuted = true;
  }
}, {
  offset: '50%',
})