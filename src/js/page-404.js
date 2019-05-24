import TweenMax from "gsap/src/uncompressed/TweenMax";
import TimelineMax from "gsap/src/uncompressed/TimelineMax";

(function() {
  if (document.querySelector(".js-404")) {
    var page404Tween = new TimelineMax();
    page404Tween
      .from(document.querySelector(".js-404-img"), 1, {
        yPercent: 100,
        ease: Power4.easeOut
      })
      .from(document.querySelector(".js-404-text"), 0.5, {
        y: 100,
        opacity: 0
      });
  }
})();
