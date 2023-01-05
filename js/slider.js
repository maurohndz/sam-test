document.addEventListener("DOMContentLoaded", () => {
	const splide = new Splide(".splide", {
		type: "loop",
		perPage: 4,
		perMove: 1,
		arrows: false,
		breakpoints: {
			1050: {
				perPage: 3
			},
			850: {
				perPage: 2
			},
			560: {
				perPage: 1
			}
		}
	});

	splide.mount();
});
