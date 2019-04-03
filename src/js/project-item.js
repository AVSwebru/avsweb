import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

(function(){
  
  //Анимация блока "Проект"
  if (document.querySelector('.js-project-item')) {

    var controller = new ScrollMagic.Controller();

    var projectItemArr = document.querySelectorAll('.js-project-item');
  
    projectItemArr.forEach(element => {

      new ScrollMagic.Scene({
        triggerElement: element,
        reverse: false,
        offset: -280
      })
        .setTween( 
          new TimelineMax()
          .from(element.querySelector('.js-project-item-image-decor'), 1.5, { ease: Power4.easeOut, scaleX: 1 })
          .from(element.querySelector('.js-project-item-title-decor-1'), 0.25, { scaleX: 1 }, '-=1.2')
          .from(element.querySelector('.js-project-item-title-1'), 0.5, { x: -100, opacity: 0 }, '-=1')
          .from(element.querySelector('.js-project-item-title-decor-2'), 0.5, { scaleX: 1 }, '-=1')
          .from(element.querySelector('.js-project-item-title-2'), 0.5, { x: -100, opacity: 0 }, '-=1')
          .from(element.querySelector('.js-project-item-type'), 1, { x: -100, opacity: 0 }, '-=1')
          .from(element.querySelector('.js-project-item-btn'), 2, {
            ease:
              Expo.easeOut, x: -50, opacity: 0
          }, '-=0.5')

        )
        .addTo(controller);
    })
    
  }

})()
