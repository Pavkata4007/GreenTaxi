
import { Datepicker } from 'vanillajs-datepicker';

const container = document.querySelector('.container');

if (typeof(container) != 'undefined' && container != null) {

	const elem = document.querySelector('input[name="calendar"]');
	const datepicker = new Datepicker(elem, {
	    autohide:true,
	    showOnFocus: true,
	    showOnClick: true,
	    format: "D, M d",
	    weekStart: 1,
	    prevArrow: '<button class="button prev-btn"><img src="assets/images/svg/angle-down.svg" alt="" /></button>',
	    nextArrow: '<button class="button next-btn"><img src="assets/images/svg/angle-down.svg" alt="" /></button>',
	    container: '.container .calendar',
	    autohide: true,
	});
}

/**
 * Change the time in the input.
 *
 */
const time = document.querySelector('.js-time');
const option = document.querySelector('.hours__select');
const calendarInput = document.querySelector('.form__controls--calendar');

if (typeof(time) != 'undefined' && time != null) {

	calendarInput.addEventListener('click', function(evn) {

		if (window.innerWidth > 1023) {
			container.classList.add('is-active');
		}

		option.addEventListener('click', function(e) {
			time.value = this.value;
		})

	});

	const calendarField = document.querySelector('.field-calendar');
	const calendarMobile = document.querySelector('.calendar-mobile');

	calendarField.addEventListener('click', function(evn) {

		if (window.innerWidth <= 1023) {

			const closeCalendar = calendarMobile.querySelector('.calendar-mobile__icon');

			calendarMobile.classList.add('is-active');

			closeCalendar.addEventListener('click', function(e) {
				calendarMobile.classList.remove('is-active');
			})
		}
	});

	document.addEventListener('click', function(e) {

		const target = e.target;

		if ( !target.closest(".container") && !target.closest(".form__controls--calendar")) {
			container.classList.remove('is-active');
		};
	})
}

