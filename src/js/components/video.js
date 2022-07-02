const videoBlock = document.querySelector('.video-block');
const video = videoBlock.querySelector('video');
const playBtn = videoBlock.querySelector('.video-block__play');
const watchTitle = document.querySelector('.watch__title');

playBtn.addEventListener('click', () => {
  videoBlock.classList.add('video-block--played');
  video.play();
  video.controls = true;
  playBtn.classList.add('video-block__play--played');
  watchTitle.classList.add('watch__title--hidden');
});

video.addEventListener('ended', function () {
  this.src = this.src
});

video.onpause = function() {
  videoBlock.classList.remove('video-block--played');
  video.controls = false;
  playBtn.classList.remove('video-block__play--played');
  watchTitle.classList.remove('watch__title--hidden');
};
