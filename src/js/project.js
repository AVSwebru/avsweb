import TimelineMax from 'gsap/src/uncompressed/TimelineMax.js';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

(function () {

  if (document.querySelector('.js-project')) {

    var controller = new ScrollMagic.Controller();

    //Секция  "Задача - Решение"
    var goalTween = new TimelineMax();

    goalTween
      .staggerFrom(document.querySelectorAll('.js-goal-item'), 1.5, {
        ease:
          Power4.easeInOut, y: 300, opacity: 0
      }, 0.25);

    //Секция  "Задача - Решение"
    var introTween = new TimelineMax();

    introTween
      .staggerFrom(document.querySelectorAll('.js-project-intro-img'), 2, {
        ease:
          Power4.easeInOut, y: 300, opacity: 0
      }, 0.25);

    new ScrollMagic.Scene({
      triggerElement: '.js-project-intro',
      reverse: false
    })
      .setTween(introTween)
      .addTo(controller);

    //Секция  "Адаптив"
    var adaptiveTween = new TimelineMax();

    adaptiveTween
      .from(document.querySelector('.js-project-adaptive-title'), 1.5, {
        ease:
          Power4.easeInOut, y: 300, opacity: 0
      })
      .from(document.querySelector('.js-project-adaptive-desc'), 1.5, {
        ease:
          Power4.easeInOut, y: 300, opacity: 0
      }, '-=1.5')
      .staggerFrom(document.querySelectorAll('.js-project-adaptive-img'), 1.5, {
        ease:
          Power4.easeInOut, x: '100vw'
      }, 0.25, '-=1');

    new ScrollMagic.Scene({
      triggerElement: '.js-project-adaptive',
      reverse: false
    })
      .setTween(adaptiveTween)
      .addTo(controller);

    //Секция  "Внутренние страницы"
    var innerpagesTween = new TimelineMax();

    innerpagesTween
      .from(document.querySelector('.js-project-innerpages-title'), 1.5, {
        ease:
          Power4.easeInOut, y: 300, opacity: 0
      })
      .from(document.querySelector('.js-project-innerpages-desc'), 1.5, {
        ease:
          Power4.easeInOut, y: 300, opacity: 0
      }, '-=1.5')
      .staggerFrom(document.querySelectorAll('.js-project-innerpages-img'), 1.5, {
        ease:
          Power4.easeInOut, y: 300, opacity: 0
      }, 0.25, '-=1');

    new ScrollMagic.Scene({
      triggerElement: '.js-project-innerpages',
      reverse: false
    })
      .setTween(innerpagesTween)
      .addTo(controller);

    //Секция  "Дополнительные страницы"
    var addpagesTween = new TimelineMax();

    addpagesTween
      .from(document.querySelector('.js-project-addpages-title'), 1.5, {
        ease:
          Power4.easeInOut, y: 300, opacity: 0
      })
      .from(document.querySelector('.js-project-addpages-desc'), 1.5, {
        ease:
          Power4.easeInOut, y: 300, opacity: 0
      }, '-=1.5');

    new ScrollMagic.Scene({
      triggerElement: '.js-project-addpages',
      reverse: false
    })
      .setTween(addpagesTween)
      .addTo(controller);
  }

})()