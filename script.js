const itemObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			console.log(entry.isIntersecting);
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
			}
		});
	},
	{ threshold: 0.5 }
);

const hiddenItems = document.querySelectorAll('.hidden');
hiddenItems.forEach((item) => {
	console.log(item);
	itemObserver.observe(item);
});
