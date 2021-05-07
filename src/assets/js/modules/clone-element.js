
const element = document.querySelector('.hours');
const calendar = document.querySelector('.datepicker');
const dates = calendar.querySelectorAll('.datepicker-cell');

/**
 * clone element and append it in the datepicker.
 *
 * @param  {Event} evn
 * @return [Void]
 */

window.addEventListener('load', function(evn) {
	const clone = element.cloneNode(true);

	calendar.appendChild(clone);
	clone.style.display = 'block';
});

const time = document.querySelector('.js-time');
const option = document.querySelector('.hours__select option');
const calendarInput = document.querySelector('.form__controls--calendar');

for (date of dates) {

	date.addEventListener('click', function(evn) {

		time.value = option.value;
	})
}

calendarInput.addEventListener('click', function(evn) {

	if( calendar.classList.contains('active') ) {
	}
})

/*date.addEventListener('click', function(e) {
	console.log('gewrgweghwehg');
})*/

option.addEventListener('click', function(evn) {
	console.log(this.value)
})
