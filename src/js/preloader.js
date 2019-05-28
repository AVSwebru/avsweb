(function() {
  var preloader = document.querySelector(".js-preloader");

  if (preloader) {
    window.addEventListener("load", () => {
      preloader.classList.add("loaded");
      document.body.classList.add("loaded");

      preloader.addEventListener("animationend", () => {
        preloader.hidden = true;
      });
    });
  }
})();
