
/**
 * Handle mobile-nav.
 *
 */

const mobileNav = document.querySelector('.js-mobile-nav');
const body = document.querySelector('body');
const headerContent = document.querySelector('.header .header__content');

mobileNav.addEventListener('click', function() {

	mobileNav.classList.toggle('mobile-nav--active');
	body.classList.toggle('is-fixed');
	headerContent.classList.toggle('is-active');
});

