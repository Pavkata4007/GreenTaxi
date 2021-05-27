
/**
 * Handle mobile-nav.
 *
 */

const mobileNav = document.querySelector('.js-mobile-nav');
const body = document.querySelector('body');
const headerContent = document.querySelector('.header .header__content');

if (typeof(mobileNav) != 'undefined' && mobileNav != null) {

	mobileNav.addEventListener('click', function() {

		mobileNav.classList.toggle('mobile-nav--active');
		body.classList.toggle('is-fixed');
		headerContent.classList.toggle('is-active');
	});
}


/**
 * When a link is clicked the nav to hide.
 *
 */
const links = document.querySelectorAll('.js-nav a');

for (link of links) {

	link.addEventListener('click', function(e) {
		mobileNav.classList.remove('mobile-nav--active');
		body.classList.remove('is-fixed');
		headerContent.classList.remove('is-active');
	})
};
