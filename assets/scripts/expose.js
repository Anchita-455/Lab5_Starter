// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
   console.log("init running");
   const horn_dropdown = document.getElementById("horn-select");
   const img = document.querySelector('#expose > img');
   const audio = document.querySelector("audio");
   const button = document.querySelector("#expose button");
   const volumeSlider = document.getElementById("volume");
   const volumeIcon = document.querySelector("#volume-controls img");

   const jsConfetti = new JSConfetti();

    //console.log("horn img:", img);
    //console.log("volume icon:", volumeIcon);
    //console.log(img);

   // create dictionary of media and have appropriate path mapped
   const media = {
    "air-horn": 
    {
      image: "./assets/images/air-horn.svg",
      sound: "./assets/audio/air-horn.mp3"
    },

    "car-horn": 
    {
      image: "./assets/images/car-horn.svg",
      sound: "./assets/audio/car-horn.mp3"
    },

    "party-horn": 
    { 
      image: "./assets/images/party-horn.svg",
      sound: "./assets/audio/party-horn.mp3"
    }
  };

  // select appropriate image based on dropdown value
   horn_dropdown.addEventListener("change", function(event) {
    updateHorn(event.target.value);
  });

  button.addEventListener("click", function() {
    playHorn();
  });

  volumeSlider.addEventListener("input", function() {
    updateVolume(Number(volumeSlider.value));
  });


  function updateHorn(selected) {
    img.src = media[selected].image;
    audio.src = media[selected].sound;
  }

  function playHorn() {
    audio.play();
    if (horn_dropdown.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  }

  function updateVolume(value) {
    audio.volume = value / 100;

    if (value == 0) {
      volumeIcon.src = "./assets/icons/volume-level-0.svg";
    } else if (value < 33) {
      volumeIcon.src = "./assets/icons/volume-level-1.svg";
    } else if (value < 67) {
      volumeIcon.src = "./assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "./assets/icons/volume-level-3.svg";
    }
  }
}