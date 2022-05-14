document.addEventListener('DOMContentLoaded', () => {
	const navbar = document.getElementById('main-navbar');

	const toggleNav = () => {
		window.scrollY > navbar.offsetHeight
			? navbar.classList.add('scrolled')
			: navbar.classList.remove('scrolled');
	}

	toggleNav();

	document.addEventListener('scroll', toggleNav);
});
