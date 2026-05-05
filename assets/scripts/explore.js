// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  const synth = window.speechSynthesis;
  let voices = [];

  const voice_dropdown = document.getElementById("voice-select");
  const button = document.querySelector("#explore button");
  const smilingIcon = document.querySelector("#explore img");

  function populateVoices() {
    voices = speechSynthesis.getVoices();
    voice_dropdown.innerHTML = "";

    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.value = voice.name;
      voice_dropdown.appendChild(option);
    }
  }

  populateVoices();
  speechSynthesis.onvoiceschanged = populateVoices;

  button.addEventListener("click", function() {
    playVoice();
  });

  function playVoice() {
    synth.cancel(); // stop any previous speech

    smilingIcon.src = "./assets/images/smiling-open.png";

    const inputTxt = document.getElementById("text-to-speak");
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voice_dropdown.value;

    // When speech ends
    utterThis.onend = function () {
      smilingIcon.src = "./assets/images/smiling.png";
    };

    // If something goes wrong
    utterThis.onerror = function () {
      smilingIcon.src = "./assets/images/smiling.png";
    };

    // Set selected voice
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }

    synth.speak(utterThis);
    inputTxt.blur();
  }
}