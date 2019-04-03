import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

(function () {

  //Анимация блока "Тип работ"
  if (document.querySelector('.js-type-item')) {

    var controller = new ScrollMagic.Controller();

    var typeItemArr = document.querySelectorAll('.js-type-item');

    typeItemArr.forEach((element, i) => {

      if (i % 2 !== 0) {

        new ScrollMagic.Scene({
          triggerElement: element,
          reverse: false,
          offset: -280
        })
          .setTween(
            new TimelineMax()
              .from(element.querySelector('.js-type-item-bg'), 1, { x: '-100%' })
              .from(element.querySelector('.js-type-item-title'), 0.5, {
                ease:
                  Power4.easeInOut, x: -300
              }, '-=0.5')
              .from(element.querySelector('.js-type-item-price'), 0.5, {
                ease:
                  Power4.easeInOut, x: -300
              }, '-=0.5')
              .staggerFrom(element.querySelectorAll('.js-type-item-list-item'), 0.5, {
                ease:
                  Power4.easeInOut, x: -300
              }, 0.25)
          )
          .addTo(controller);

      } else {

        new ScrollMagic.Scene({
          triggerElement: element,
          reverse: false,
          offset: -280
        })
          .setTween(
            new TimelineMax()
              .from(element.querySelector('.js-type-item-bg'), 1, { x: '100%' })
              .from(element.querySelector('.js-type-item-title'), 0.5, {
                ease:
                  Power4.easeInOut, x: 300
              }, '-=0.5')
              .from(element.querySelector('.js-type-item-price'), 0.5, {
                ease:
                  Power4.easeInOut, x: 300
              }, '-=0.5')
              .staggerFrom(element.querySelectorAll('.js-type-item-list-item'), 0.5, {
                ease:
                  Power4.easeInOut, x: 300
              }, 0.25)
          )
          .addTo(controller);
          
      }

    })

  }

})()
