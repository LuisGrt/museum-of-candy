$(function() {
	toggleNav();
	$(window).scroll(toggleNav);

	function toggleNav() {
		var navbar = document.getElementById('main-navbar');
		$(navbar).toggleClass('scrolled', $(this).scrollTop() > $(navbar).height());
	}
});
