(function() {
	let forms = document.querySelectorAll(".js-form");

	if (forms) {
		forms.forEach(element => {
			element.addEventListener("submit", event => {
				event.preventDefault();
				if (element.checkValidity()) {
					element.classList.remove("is-invalid");
					element.submit();
				} else {
					element.classList.add("is-invalid");
				}
			});
		});
	}
})();
