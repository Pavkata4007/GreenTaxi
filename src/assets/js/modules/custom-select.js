
/**
 * Custom select.
 *
 */
const element = document.querySelector('.js-choice');

if (typeof(element) != 'undefined' && element != null) {

	const choices = new Choices(element, {
		searchEnabled:false,
	});
}

