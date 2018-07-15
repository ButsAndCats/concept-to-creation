document.addEventListener("DOMContentLoaded", function() {
  var collage = function collage() {
    var scrollTop = $(window).scrollTop();
    var wh = $(window).height();
    var section = $('.section-1').offset().top;
    var section_offset = section - wh + 300;
    // ANIMATE COLLAGE on SCROLL
    if ( scrollTop >= section_offset ) {
      var a =  (scrollTop - section_offset) / 10;
          b = -(scrollTop - section_offset) / 15;

      $('.img-1').css( { transform : 'translate3d(0,' + b +'px, 0)' } );
      $('.img-2').css( { transform : 'translate3d(0,' + a +'px, 0)' } );
    }
  }

  document.addEventListener("scroll", collage);
  window.addEventListener("resize", collage);
  window.addEventListener("orientationchange", collage);
});
