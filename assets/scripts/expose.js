// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  let hornSelect = document.getElementById('horn-select');
  let hornImage = document.querySelector('#expose img');
  let hornAudio = document.querySelector('#expose audio');
  let volumeSlider = document.getElementById('volume');
  let volumeIcon = document.querySelector('#volume-controls img');
  let playButton = document.querySelector('button');

  hornSelect.addEventListener('change', function() {
    let selectedHorn = this.value;

    if (selectedHorn === 'air-horn') {
      hornImage.src = '../assets/images/air-horn.svg';
      hornAudio.src = '../assets/audio/air-horn.mp3';
    } else if (selectedHorn === 'car-horn') {
      hornImage.src = '../assets/images/car-horn.svg';
      hornAudio.src = '../assets/audio/car-horn.mp3';
    } else if (selectedHorn === 'party-horn') {
      hornImage.src = '../assets/images/party-horn.svg';
      hornAudio.src = '../assets/audio/party-horn.mp3';
    } else {
      hornImage.src = '../assets/images/no-image.png';
      hornAudio.src = '';
    }
  });

  volumeSlider.addEventListener('input', function() {
    if (this.value == 0) {
      volumeIcon.src = '../assets/icons/volume-level-0.svg';
    } else if (this.value < 33) {
      volumeIcon.src = '../assets/icons/volume-level-1.svg';
    } else if (this.value < 67) {
      volumeIcon.src = '../assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = '../assets/icons/volume-level-3.svg';
    }
    hornAudio.volume = this.value / 100;
  });

  playButton.addEventListener('click', function() {
    hornAudio.play();
    console.log(hornAudio.volume);
    console.log("test");
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
    
    
}