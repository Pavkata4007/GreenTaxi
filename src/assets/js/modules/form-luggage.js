
const luggage = document.querySelector('.luggage');
const luggageTrigger = document.querySelector('.form__controls--luggage');

if (typeof(luggage) != 'undefined' && luggage != null) {

	luggageTrigger.addEventListener('click', function(evn) {

		luggage.classList.add('is-active');
	});
}
