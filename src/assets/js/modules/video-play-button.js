
/**
 * On click play the video.
 *
 */
const btn = document.querySelector('.js-play');

btn.addEventListener('click', function(evn) {

	const target = evn.target;
	const videoSection = btn.previousElementSibling;
	const video = videoSection.querySelector('video');

	btn.classList.add('is-hidden');
	video.play();
})
