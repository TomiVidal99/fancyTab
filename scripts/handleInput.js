let optionsIcon = document.getElementById("options");
let imgInput = document.getElementById("imgInput");
let selectAnimations = document.getElementById("animations");
let weatherInput = document.getElementById("weatherInput");
let selectLanguague = document.getElementById("languague");

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

selectAnimations.addEventListener("change", () => {
  let index = selectAnimations.selectedIndex;
  switch (index) {
    case 0:
      bubblesActive = false;
      treesActive = false;
    break;  
    case 1:
      bubblesActive = true;
      treesActive = false;
    break;  
    case 2:
      bubblesActive = false;
      treesActive = true;
    break;
  }
  localStorage.setItem("animation", index.toString());
});  

selectLanguague.addEventListener("change", () => {
  let index = selectLanguague.selectedIndex;
  switch (index) {
    case 0:
      localStorage.setItem("lang", "es");
    break;  
    case 1:
      localStorage.setItem("lang", "en");
    break;  
  }  
  defineTextLanguague();
  defineDocumentText();
});

