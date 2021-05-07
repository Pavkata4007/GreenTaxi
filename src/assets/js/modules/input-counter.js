
const luggage = document.querySelector('.luggage');
const luggageTrigger = document.querySelector('.form__controls--luggage');

/**
 *  Opens the input counters.
 *
 * @param  {Event} evn
 * @return {Void}
 */

if (typeof(luggage) != 'undefined' && luggage != null) {
	luggageTrigger.addEventListener('click', function(evn) {

		luggage.classList.add('is-active');
	});
}

const minuses = document.querySelectorAll('.js-minus');
const large = document.getElementById('luggage-large');
const small = document.getElementById('luggage-small');
const largeInput = document.querySelector('.js-large');
const smallInput = document.querySelector('.js-small');

/**
 * On click changes the value of the input.
 *
 * @param  {Event} evn
 * @return {[Void]}
 */

if (typeof(minuses) != 'undefined' && minuses != null) {

	for (minus of minuses) {

		minus.addEventListener('click', function(evn) {
			const input = this.nextElementSibling;

			let count = parseInt(input.value) - 1;
			count = count < 1 ? 1 : count;
			input.value = count;
			input.innerHTML = count;

			large.value = largeInput.value;
			small.value = smallInput.value;

			return false;
		})
	}
}

/**
 * On click changes the value of the input.
 *
 * @param  {Event} evn
 * @return {[Void]}
 */

const pluses = document.querySelectorAll('.js-plus');

if (typeof(pluses) != 'undefined' && pluses != null) {

	for (plus of pluses) {


		plus.addEventListener('click', function(evn)  {
			const input = this.previousElementSibling;

			let count = parseInt(input.value) + 1;
			input.value = count;
			input.innerHTML = count;

			large.value = largeInput.value;
			small.value = smallInput.value;

			return false;
		});
	}
}
