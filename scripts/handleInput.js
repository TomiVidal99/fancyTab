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

/* DETECT AND SAVE CHANGES WHEN SLIDERS OF THE TIMER AND DATE FONT SIZE ARE CHANGED */
clockFontSize.addEventListener("input", () => {
  timeFontSize = clockFontSize.value; 
});
clockFontSize.addEventListener("change", () => {
  if (timeFontSize) {
    localStorage.setItem("clockFontSize", timeFontSize.toString());
  }
});
 
/* DETECT AND SAVE CHANGES WHEN HOURS MINUTES SECONDS AND THICKNESS OF THE CLOCKS SLIDERS */
/* HOURS */
document.getElementById("clockHoursSize").addEventListener("input", () => {
  hoursSize = document.getElementById("clockHoursSize").value; 
});
document.getElementById("clockHoursSize").addEventListener("change", () => {
  if (hoursSize) {
    localStorage.setItem("clockHoursSize", hoursSize.toString());
  }
});
/* MINUTES */
document.getElementById("clockMinutesSize").addEventListener("input", () => {
  minutesSize = document.getElementById("clockMinutesSize").value; 
});
document.getElementById("clockMinutesSize").addEventListener("change", () => {
  if (minutesSize) {
    localStorage.setItem("clockMinutesSize", minutesSize.toString());
  }
});
/* SECONDS */
document.getElementById("clockSecondsSize").addEventListener("input", () => {
  secondsSize = document.getElementById("clockSecondsSize").value; 
});
document.getElementById("clockSecondsSize").addEventListener("change", () => {
  if (secondsSize) {
    localStorage.setItem("clockSecondsSize", secondsSize.toString());
  }
});
/* CLOCK THICKNESS */
document.getElementById("clockThickness").addEventListener("input", () => {
  clockThickness = document.getElementById("clockThickness").value;
});
document.getElementById("clockThickness").addEventListener("change", () => {
  if (clockThickness) {
    localStorage.setItem("clockThickness", clockThickness.toString());
  }
});
/* ACTIVATE THE CLOCK */
document.getElementById("clockSwitchCheckbox").addEventListener("click" ,() => {
  localStorage.setItem("isClockActive", document.getElementById("clockSwitchCheckbox").checked.toString());
});