const itemObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
			}
		});
	},
	{ threshold: 0.5 }
);

const hiddenItems = document.querySelectorAll('.hidden');
hiddenItems.forEach((item) => itemObserver.observe(item));
