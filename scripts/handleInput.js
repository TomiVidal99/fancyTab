let optionsIcon = document.getElementById("options");
let imgInput = document.getElementById("imgInput");
let handleAnimations = document.getElementById("handleAnimations");
let weatherInput = document.getElementById("weatherInput");

optionsIcon.addEventListener("click", () => {
  let state = window.getComputedStyle(optionsMenu).display;
  if (state === "none") {
    optionsMenu.style.display = "inline-block";
  } else {
    optionsMenu.style.display = "none";
  }
});

function loaded() {
  let imgVal = localStorage.getItem("img");
  if (imgVal != undefined && imgVal != null) {
    imgInput.value = localStorage.getItem("img");
    getImagesJSON(imgVal);
  }
  let weatherVal = localStorage.getItem("city");
  if (weatherVal != undefined && weatherVal != null) {
    weatherInput.value = weatherVal;
    obtainWeather(weatherVal);
  }
}

let item = localStorage.getItem("animationsOn");
if (item == "false") {
  handleAnimations.innerHTML = "Animaciones desactivadas";
} else if (item == "true") {
  handleAnimations.innerHTML = "Animaciones activas";
} else if (item != "false" || item != "true") {
  localStorage.setItem("animationsOn", "true");
}

imgInput.addEventListener("blur", () => {
  let imgVal = imgInput.value;
  localStorage.setItem("img", imgVal);
  getImagesJSON(imgVal);
});

weatherInput.addEventListener("blur", () => {
  let weatherVal = weatherInput.value;
  localStorage.setItem("city", weatherVal);
  obtainWeather(weatherVal);
});

handleAnimations.addEventListener("click", () => {
  let item = localStorage.getItem("animationsOn");
  if (item == "true") {
    localStorage.setItem("animationsOn", "false");
    handleAnimations.innerHTML = "Animaciones desactivadas";
  } else if (item == "false") {
    localStorage.setItem("animationsOn", "true");
    handleAnimations.innerHTML = "Animaciones activas";
  }
});  

