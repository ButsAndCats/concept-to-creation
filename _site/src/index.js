import Limelight from '@butsandcats/limelight';
import slick from 'slick-carousel';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('#Collage')) {
    console.log('collage')
    /**
     * Animates the parallax effect on the collage
    **/
    function collage() {
      const scrollTop = $(window).scrollTop();
      const wh = $(window).height();
      const section = $('.section-1').offset().top;
      const sectionOffset = section - wh + 300;
      // ANIMATE COLLAGE on SCROLL
      if (scrollTop >= sectionOffset) {
        const a = (scrollTop - sectionOffset) / 10;
        const b = -(scrollTop - sectionOffset) / 15;

        $('.img-1').css({
          transform: 'translate3d(0,'+ b +'px, 0)',
        });
        $('.img-2').css({
          transform: 'translate3d(0,'+ a +'px, 0)',
        });
      }
    }

    document.addEventListener('scroll', collage);
    window.addEventListener('resize', collage);
    window.addEventListener('orientationchange', collage);
  }

  if (document.querySelector('#Gallery')) {
    $('[data-slick]').slick({
      arrows: false,
    });
    const galleryPopup = new Limelight({
      target: '#GalleryPopup',
    });
    $(document).on('click', '[data-gallery-index]', (e) => {
      const index = $(e.target).data('gallery-index');
      console.log(index);
      $('[data-slick]').slick('slickGoTo', index);
      galleryPopup.show();
    });
  }
});
