import TimelineMax from 'gsap/src/uncompressed/TimelineMax.js';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

(function () {

  if (document.querySelector('.js-services')) {

    var controller = new ScrollMagic.Controller();

    //Секция  "Что вы получите в итоге"
    var resultTween = new TimelineMax();

    resultTween
      .staggerFrom(document.querySelectorAll('.js-result-item'), 1.5, {
        ease:
          Power4.easeInOut, y: 300, opacity: 0
      }, 0.25);

    new ScrollMagic.Scene({
      triggerElement: '.js-services-result',
      reverse: false
    })
      .setTween(resultTween)
      .addTo(controller);

    //Секция  "Что вы получите в итоге"
    var priceTween = new TimelineMax();

    resultTween
      .from(document.querySelector('.js-services-price-title'), 1.5, {
        ease:
          Power4.easeInOut, y: 300, opacity: 0
      })
      .from(document.querySelector('.js-services-price-text'), 1.5, {
        ease:
          Power4.easeInOut, y: 300, opacity: 0
      }, '-=1');

    new ScrollMagic.Scene({
      triggerElement: '.js-services-price',
      reverse: false
    })
      .setTween(priceTween)
      .addTo(controller);

    //Секция  "Что вы получите в итоге"
    var workTween = new TimelineMax();

    workTween
      .from(document.querySelector('.js-services-work-border'), 1, {
        ease:
          Power4.easeInOut, transformOrigin: 'left', scaleX: 0
      })
      .from(document.querySelector('.js-services-img-decor'), 1, {
        ease:
          Power4.easeInOut, scaleX: 1
      })
      .from(document.querySelector('.js-services-work-title'), 0.5, {
        ease:
          Power4.easeInOut, y: 300, opacity: 0
      })
      .staggerFrom(document.querySelectorAll('.js-services-work-item'), 0.5, {
        ease:
          Power4.easeInOut, y: 300, opacity: 0
      }, 0.5)

    new ScrollMagic.Scene({
      triggerElement: '.js-services-work',
      reverse: false
    })
      .setTween(workTween)
      .addTo(controller);


  }

})()