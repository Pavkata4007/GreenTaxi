
/**
 * Popup.
 *
 */
const btn = document.querySelector('.js-popup');
const popup = document.querySelector('.js-popup-video');
const video = popup.querySelector('video');
const wrapper = document.querySelector('.wrapper');
const close = document.querySelector('.js-close-popup');

btn.addEventListener('click', function(evn) {
	const target = evn.target;

	popup.classList.add('is-active');
	video.play();
	wrapper.classList.add('has-shadow');

	if( popup.classList.contains('is-active') ) {

		document.onkeydown = function(e) {

			if(e.key === "Escape") {
		        popup.classList.remove('is-active');
				wrapper.classList.remove('has-shadow');
				video.pause();
		    }
		}
	}

	close.addEventListener('click', function(evn) {
		popup.classList.remove('is-active');
		wrapper.classList.remove('has-shadow');
		video.pause();
	});
});

/**
 * On click outside of the popup, to close it.
 *
 * @param  {Event} e
 * @return {Void}
 */
wrapper.addEventListener('click', function(e) {

	const target = e.target;

	if ( target !== (popup) && target !== (btn)) {
		popup.classList.remove('is-active');
		wrapper.classList.remove('has-shadow');
		video.pause();
	}
})
