
/**
 * On click play the video.
 *
 */
const btn = document.querySelector('.js-play');

if (typeof(btn) != 'undefined' && btn != null) {
	btn.addEventListener('click', function(evn) {
		const target = evn.target;
		const videoSection = btn.previousElementSibling;
		const video = videoSection.querySelector('video');

		btn.classList.add('is-hidden');
		videoSection.classList.add('is-active');
		video.play();
	})
}
