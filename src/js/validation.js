(function() {
  var formArr = document.querySelectorAll(".js-form");

  formArr.forEach(element => {
    element.addEventListener("submit", event => {
      event.preventDefault();
      console.log("test");
      element.classList.add("is-checked");
    });
  });
})();
