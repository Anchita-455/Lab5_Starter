// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  const synth = window.speechSynthesis;
  const voices = speechSynthesis.getVoices();
  const voice_dropdown = document.getElementById("voice-select");
  const button = document.querySelector("#explore button");
  const smilingIcon = document.querySelector("#explore img");

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.value = voice.name; 
    //option.setAttribute("data-lang", voice.lang);
    //option.setAttribute("data-name", voice.name);
    voice_dropdown.appendChild(option);
  }

  button.addEventListener("click", function() {
    playVoice();
  });

  function playVoice() {

    smilingIcon.src = "./assets/images/smiling-open.png";
    const inputTxt = document.getElementById("text-to-speak");
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voice_dropdown.value;

    utterThis.onend = function () 
    {
      smilingIcon.src = "./assets/images/smiling.png";
    };
      
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }
      synth.speak(utterThis);
      inputTxt.blur();

  }
  
}