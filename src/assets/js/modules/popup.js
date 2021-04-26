
/**
 * Popup.
 *
 */
const btn = document.querySelector('.js-popup');
const popup = document.querySelector('.js-popup-video');
const video = popup.querySelector('video');
const wrapper = document.querySelector('.wrapper');

btn.addEventListener('click', function(evn) {
	const target = evn.target;

	popup.classList.add('is-active');
	video.play();
	wrapper.classList.add('has-shadow');

		console.log(target)
		console.log(btn)

	if( popup.classList.contains('is-active') ) {

		document.onkeydown = function(e) {

			if(e.key === "Escape") {
		        popup.classList.remove('is-active');
				wrapper.classList.remove('has-shadow');
				video.pause();
		    }
		}

	}
});

