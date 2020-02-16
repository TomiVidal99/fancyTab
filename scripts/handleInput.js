const optionsIcon = document.getElementById("options");
const imgInput = document.getElementById("imgInput");
const animationsIndex = document.getElementById("animationsIndex");
const weatherInput = document.getElementById("weatherInput");
const selectLanguage = document.getElementById("language");

optionsIcon.addEventListener("click", () => {
  let state = window.getComputedStyle(optionsMenu).display;
  if (state === "none") {
    optionsMenu.style.display = "inline-block";
  } else {
    optionsMenu.style.display = "none";
  }
  document.querySelectorAll("details").forEach(e => {
    e.open = false;
  });
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


selectLanguage.addEventListener("change", () => {
  let index = selectLanguage.selectedIndex;
  switch (index) {
    case 0:
      localStorage.setItem("lang", "es");
      browserLang = "es";
      break;
    case 1:
      localStorage.setItem("lang", "en");
      browserLang = "en";
      break;
  }
  handleLanguage(langJSON[browserLang]);
  obtainWeather(weatherInput.value);
});

// handle details states; when one it's clicked decide if other should close
const details_ = document.querySelectorAll("details");
for (let det_ of details_) {
  det_.addEventListener("click", a => {
    details_.forEach(e => {
      if (e != det_ && e.open) {
        e.open = false;
      }
    });
  });
}
