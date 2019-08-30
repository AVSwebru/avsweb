import TweenMax from 'gsap/src/uncompressed/TweenMax.js';

(function () {

  if (document.querySelector('.js-blog')) {

    TweenMax.staggerFrom(document.querySelectorAll('.js-blog-card'), 1.5, {
      ease:
        Expo.easeOut, opacity: 0, y: 300
    }, 1)

  }

})()