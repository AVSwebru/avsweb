import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';

(function() {

  var btnMenu = document.querySelector('.js-menu-toggler')
  var  btnContacts = document.querySelector('.js-contacts-toggler')
  var  menu = document.querySelector('.js-menu-main')
  var  contacts = document.querySelector('.js-contacts')
  var  logo = document.querySelector('.js-logo')

  var menuElements = [
        btnMenu,
        btnContacts,
        menu,
        contacts,
        logo
      ]

  btnMenu.addEventListener('click', () => {

      
     
      // menuElements.forEach(element => {
        
      //   element.classList.add('opened-menu');
      // });
    }
  })


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

