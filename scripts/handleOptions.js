const optionsIcon = document.getElementById("options");
const optionsMenu = document.getElementById("optionsMenu");
const optionsImages = document.getElementById("handleImages");
const optionsAnimations = document.getElementById("handleAnimations");
const optionWeather = ;



optionsImages.addEventListener("click", () => {
  let item = localStorage.getItem("imagesOn");
  if (item == "true") {
    localStorage.setItem("imagesOn", "false");
    optionsImages.innerHTML = "Imágenes desactivadas";
  } else if (item == "false") {
    localStorage.setItem("imagesOn", "true");
    optionsImages.innerHTML = "Imágenes activas";
  }
});


optionsAnimations.addEventListener("click", () => {
  let item = localStorage.getItem("animationsOn");
  if (item == "true") {
    localStorage.setItem("animationsOn", "false");
    optionsAnimations.innerHTML = "Animaciones desactivadas";
  } else if (item == "false") {
    localStorage.setItem("animationsOn", "true");
    optionsAnimations.innerHTML = "Animaciones activas";
  }
});

optionWeather.addEventListener("click", () => {
  let item = localStorage.getItem("weatherOn");
  if (item == "true") {
    localStorage.setItem("weatherOn", "false");
    optionWeather.innerHTML = "Clima desactivado";
  } else if (item == "false") {
    localStorage.setItem("weatherOn", "true");
    optionWeather.innerHTML = "Clima activas";
  }
});
