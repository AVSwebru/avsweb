import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

(function () {

  //Анимация блока "Услуга"
  if (document.querySelector('.js-service-item')) {

    var controller = new ScrollMagic.Controller();

    var serviceItemArr = document.querySelectorAll('.js-service-item');

    serviceItemArr.forEach((element) => {

      new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 1,
        reverse: false
      })
        .setTween(
          new TimelineMax()
            .from(element, 1, {
              ease:
                Power4.easeInOut, y: 300, opacity: 0
            })
            .from(element.querySelector('.js-service-border'), 1, {
              ease:
                Power4.easeInOut, transformOrigin: '0 50%', scaleX: 0
            })
        )
        .addTo(controller);
    })

  }

})()
