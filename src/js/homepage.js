import TimelineMax from "gsap/src/uncompressed/TimelineMax";
import ScrollMagic from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

(function() {
  //Анимации главной страницы

  if (document.querySelector(".js-homepage")) {
    var controller = new ScrollMagic.Controller();

    //Секция "Обратная связь"
    var feedbackTween = new TimelineMax();

    feedbackTween.from(document.querySelector(".js-feedback"), 1.5, {
      ease: Expo.easeOut,
      y: 400,
      opacity: 0
    });

    new ScrollMagic.Scene({
      triggerElement: ".js-home-feedback",
      reverse: false,
      offset: 150
    })
      .setTween(feedbackTween)
      .addTo(controller);

    //Секция "Наши клиенты"
    var clientsTween = new TimelineMax();

    clientsTween.staggerFrom(
      document.querySelectorAll(".js-client-item"),
      2,
      {
        ease: Expo.easeOut,
        y: 300,
        opacity: 0
      },
      0.25
    );

    new ScrollMagic.Scene({
      triggerElement: ".js-home-clients",
      reverse: false
    })
      .setTween(clientsTween)
      .addTo(controller);

    //Секция "Контакты"
    var contactsTween = new TimelineMax();

    contactsTween
      .staggerFrom(
        document.querySelectorAll(".js-contacts-item"),
        2,
        {
          ease: Expo.easeOut,
          y: 300,
          opacity: 0
        },
        0.25
      )
      .from(
        document.querySelectorAll(".js-contacts-item-border"),
        2,
        {
          ease: Expo.easeOut,
          transformOrigin: "left",
          scaleX: 0
        },
        "-=1"
      );

    new ScrollMagic.Scene({
      triggerElement: ".js-home-contacts",
      reverse: false
    })
      .setTween(contactsTween)
      .addTo(controller);
  }
})();
