import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';

(function() {

  var btnMenu = document.querySelector('.js-menu-toggler')
  var menu = document.querySelector('.js-menu')
  var contacts = document.querySelector('.js-contacts-block')
  var logo = document.querySelector('.js-logo')
  var isMenuOpened = false;
  var menuElements = [
      btnMenu,
      menu,
      contacts,
      logo
    ]

    var menuOpen = new TimelineMax();

    menuOpen
      .from(document.querySelector('.js-menu'), 0.5, {opacity: 0})
      .staggerFrom(document.querySelectorAll('.nav-main__item'), 0.25, { ease:
        Expo. easeOut, y: -30, opacity: 0}, 0.15);


 
    
      

    btnMenu.addEventListener('click', () => {
      if (isMenuOpened) {

       
        TweenMax.fromTo(document.querySelector('.js-menu'), 0.25, {opacity: 1}, {opacity: 0, onComplete: () => {
          menuElements.forEach(element => {
            element.classList.remove('opened-menu');
          });
        }})

       
        isMenuOpened = false;
      } else {
        menuElements.forEach(element => {
          element.classList.add('opened-menu');
        });
        menuOpen.time(0);
        menuOpen.play();
      
        isMenuOpened = true;
      }
    });

})()


// var menuBtn = document.querySelector('.js-menu-btn');
// var telBtn = document.querySelector('.js-tel-btn');
// var menu = document.querySelector('.js-menu');
// var contactsBlock = document.querySelector('.js-contacts-block');

// menuBtn.addEventListener('click', () => {
//   if (contactsBlock.classList.contains('active')) {
//     telBtn.classList.remove('active');
//     contactsBlock.classList.remove('active');
//   }
// });

// telBtn.addEventListener('click', () => {
//   if (menu.classList.contains('active')) {
//     menuBtn.classList.remove('active');
//     menu.classList.remove('active');
//   }

// });

