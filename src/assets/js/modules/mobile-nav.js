/**
 * Handle mobile-nav
 */

const $window = $(window);
const $mobileNav = $('.js-mobile-nav')

$mobileNav.on('click', function() {
	const $this = $(this);
	const $header = $('.header .header__content');
	const $body = $('body');
	const $dropdown = $('.js-nav ul ul');

	$header.toggleClass('is-active');
	$this.toggleClass('mobile-nav--active');
	$body.toggleClass('is-fixed');
});

