(function() {
  var sectionNavWrapper = document.querySelector('.js-nav-section-wrapper');
  
  if (sectionNavWrapper) {
    if (window.matchMedia("(min-width: 640px)").matches) {
      sectionNavWrapper.setAttribute('data-uk-sticky', 'bottom: true');
    }
  }
})()