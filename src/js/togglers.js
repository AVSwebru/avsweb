import TimelineMax from "gsap/src/uncompressed/TimelineMax";
import TweenMax from "gsap/src/uncompressed/TweenMax";

(function() {
  var btnMenu = document.querySelector(".js-menu-toggler");
  var menu = document.querySelector(".js-menu");
  var contacts = document.querySelector(".js-contacts-block");
  var logo = document.querySelector(".js-logo");
  var btnContacts = document.querySelector(".js-contacts-toggler");
  var isMenuOpened = false;
  var isContactsOpened = false;
  var menuElements = [btnMenu, menu, contacts, logo];

  if (btnMenu & menu) {
    //Анимация открытия меню
    var menuOpen = new TimelineMax({ paused: true });

    menuOpen
      .to(document.querySelector(".js-menu"), 0, { className: "+=opened-menu" })
      .to(document.querySelector(".js-logo"), 0, { className: "+=opened-menu" })
      .to(document.querySelector(".js-menu-toggler"), 0, {
        className: "+=opened-menu"
      })
      .to(document.querySelector(".js-contacts-block"), 0, {
        className: "+=opened-menu"
      })
      .fromTo(
        document.querySelector(".js-menu"),
        0.5,
        { opacity: 0 },
        { opacity: 1 }
      )
      .from(document.querySelector(".js-nav-list"), 0.7, {
        ease: Circ.easeOut,
        y: -40
      })
      .staggerFrom(
        document.querySelectorAll(".js-nav-item"),
        0.25,
        { ease: Circ.easeOut, y: -10, opacity: 0 },
        0.15,
        "-=0.7"
      );

    //Анимация закрытия меню
    var menuClose = new TimelineMax({ paused: true });

    menuClose
      .fromTo(
        document.querySelector(".js-menu"),
        0.25,
        { opacity: 1 },
        { opacity: 0 }
      )
      .to(document.querySelector(".js-menu"), 0, { className: "-=opened-menu" })
      .to(document.querySelector(".js-logo"), 0, { className: "-=opened-menu" })
      .to(document.querySelector(".js-menu-toggler"), 0, {
        className: "-=opened-menu"
      })
      .to(document.querySelector(".js-contacts-block"), 0, {
        className: "-=opened-menu"
      });

    btnMenu.addEventListener("click", () => {
      if (isMenuOpened) {
        menuClose.time(0);
        menuClose.play();
        isMenuOpened = false;
      } else {
        menuOpen.time(0);
        menuOpen.play();
        isMenuOpened = true;
      }
    });

    if (window.matchMedia("(max-width: 640px)").matches) {
      //Анимация открытия блока контактов
      var contactsOpen = new TimelineMax({ paused: true });
      contactsOpen
        .to(document.querySelector(".js-contacts-block"), 0, {
          className: "+=opened-contacts"
        })
        .to(document.querySelector(".js-contacts-toggler"), 0, {
          className: "+=opened-contacts"
        })
        .fromTo(
          document.querySelector(".js-contacts-block"),
          0.5,
          { opacity: 0 },
          { opacity: 1 }
        )
        .from(document.querySelector(".js-contacts-tel"), 0.25, {
          ease: Circ.easeOut,
          opacity: 0,
          y: -40
        })
        .from(document.querySelector(".js-social-list"), 0.25, {
          ease: Circ.easeOut,
          opacity: 0,
          y: -20
        })
        .staggerFromTo(
          document.querySelectorAll(".js-social-item"),
          0.25,
          { ease: Circ.easeOut, opacity: 0, y: -30 },
          { opacity: 1, y: 0 },
          0.05,
          "-=0.65"
        );

      //анимация закрытия блока контактов
      var contactsClose = new TimelineMax({ paused: true });
      contactsClose
        .to(document.querySelector(".js-contacts-toggler"), 0, {
          className: "-=opened-contacts"
        })
        .fromTo(
          document.querySelector(".js-contacts-block"),
          1,
          { opacity: 1 },
          { opacity: 0 }
        )
        .to(document.querySelector(".js-contacts-block"), 0, {
          className: "-=opened-contacts"
        });

      btnContacts.addEventListener("click", () => {
        if (isContactsOpened) {
          contactsClose.time(0);
          contactsClose.play();
          isContactsOpened = false;
        } else {
          contactsOpen.time(0);
          contactsOpen.play();
          isContactsOpened = true;
        }
      });
    }
  }
})();
