// explore.js

window.addEventListener('DOMContentLoaded', init);

let voiceSelect;
let textInput;
let talkButton;
let face;
let voices = [];
const synth = window.speechSynthesis;

function init() {
  voiceSelect = document.getElementById('voice-select');
  textInput = document.getElementById('text-to-speak');
  talkButton = document.querySelector('button');
  face = document.querySelector('img');

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', speak);
}


function populateVoiceList() {
  voices = synth.getVoices();

  voiceSelect.innerHTML = '';

  for (let i = 0; i < voices.length; i++) {
    let option = document.createElement('option');
    option.value = voices[i].name;
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    voiceSelect.appendChild(option);
  }
}

function speak() {
  const utterance = new SpeechSynthesisUtterance(textInput.value);

  const selectedVoiceName = voiceSelect.value;

  const selectedVoiceObject = voices.find(voice => voice.name === selectedVoiceName);

  if (selectedVoiceObject) {
    utterance.voice = selectedVoiceObject;
  }

  utterance.onstart = function() {
    face.src = 'assets/images/smiling-open.png';
  };

  utterance.onend = function() {
    face.src = 'assets/images/smiling.png';
  };

  synth.speak(utterance);
}
