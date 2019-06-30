import ScrollMagic from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";

(function() {
	var controller = new ScrollMagic.Controller();

	if (document.querySelector(".js-homepage")) {
		new ScrollMagic.Scene({
			triggerElement: ".js-home-services",
			triggerHook: 0
		})
			.on("enter", () => removeClass(".js-logo", "logo--opened"))
			.on("leave", () => addClass(".js-logo", "logo--opened"))
			.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: ".js-home-services",
			triggerHook: 0
		})
			.on("enter", () =>
				removeClass(".js-contacts-block", "contacts-block--opened")
			)
			.on("leave", () =>
				addClass(".js-contacts-block", "contacts-block--opened")
			)
			.addTo(controller);

		if (window.matchMedia("(min-width: 640px)").matches) {
			//смена цвета фона кнопки меню
			new ScrollMagic.Scene({
				triggerElement: ".js-home-portfolio",
				triggerHook: 0
			})
				.on("enter", () =>
					switchClass(
						".js-menu-toggler",
						"btn-menu--light",
						"btn-menu--dark"
					)
				)
				.on("leave", () =>
					switchClass(
						".js-menu-toggler",
						"btn-menu--dark",
						"btn-menu--light"
					)
				)
				.addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: ".js-home-feedback",
				triggerHook: 0
			})
				.on("enter", () =>
					switchClass(
						".js-menu-toggler",
						"btn-menu--dark",
						"btn-menu--light"
					)
				)
				.on("leave", () =>
					switchClass(
						".js-menu-toggler",
						"btn-menu--light",
						"btn-menu--dark"
					)
				)
				.addTo(controller);

			//смена цвета логотипа
			new ScrollMagic.Scene({
				triggerElement: ".js-type-items",
				triggerHook: 0,
				offset: -35
			})
				.on("enter", () =>
					switchClass(".js-logo", "logo--dark", "logo--light")
				)
				.on("leave", () =>
					switchClass(".js-logo", "logo--light", "logo--dark")
				)
				.addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: ".js-home-portfolio",
				triggerHook: 0,
				offset: -35
			})
				.on("enter", () =>
					switchClass(".js-logo", "logo--light", "logo--dark")
				)
				.on("leave", () =>
					switchClass(".js-logo", "logo--dark", "logo--light")
				)
				.addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: ".js-home-feedback",
				triggerHook: 0,
				offset: -35
			})
				.on("enter", () =>
					switchClass(".js-logo", "logo--dark", "logo--light")
				)
				.on("leave", () =>
					switchClass(".js-logo", "logo--light", "logo--dark")
				)
				.addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: ".js-home-clients",
				triggerHook: 0,
				offset: -35
			})
				.on("enter", () =>
					switchClass(".js-logo", "logo--light", "logo--dark")
				)
				.on("leave", () =>
					switchClass(".js-logo", "logo--dark", "logo--light")
				)
				.addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: ".js-home-contacts",
				triggerHook: 0,
				offset: -35
			})
				.on("enter", () =>
					switchClass(".js-logo", "logo--dark", "logo--light")
				)
				.on("leave", () =>
					switchClass(".js-logo", "logo--light", "logo--dark")
				)
				.addTo(controller);
		}
	}

	function switchClass(element, addClassName, removeClassName) {
		document.querySelector(element).classList.add(addClassName);
		document.querySelector(element).classList.remove(removeClassName);
	}

	function addClass(element, className) {
		document.querySelector(element).classList.add(className);
	}

	function removeClass(element, className) {
		document.querySelector(element).classList.remove(className);
	}
})();
