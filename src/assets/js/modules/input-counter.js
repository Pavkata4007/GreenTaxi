
/**
 * On click changes the value of the input.
 */
const minuses = document.querySelectorAll('.js-minus');
const large = document.getElementById('luggage-large');
const small = document.getElementById('luggage-small');
const largeInput = document.querySelector('.js-large');
const smallInput = document.querySelector('.js-small');

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
 */

const pluses = document.querySelectorAll('.js-plus');

if (typeof(pluses) != 'undefined' && pluses != null) {

	for (plus of pluses) {

		plus.addEventListener('click', function(evn)  {
			const input = this.previousElementSibling;

			let count = parseInt(input.value) + 1;
			input.value = count;
			input.innerHTML = count;
			largeInput.value = input.value;

			large.value = largeInput.value;
			small.value = smallInput.value;

			return false;
		});
	}
}
