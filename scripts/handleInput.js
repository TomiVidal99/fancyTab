const optionsIcon = document.getElementById("options");
const imgInput = document.getElementById("imgInput");
const selectAnimations = document.getElementById("animations");
const weatherInput = document.getElementById("weatherInput");
const selectLanguague = document.getElementById("languague");

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
  browserLang = localStorage.getItem("lang");
  obtainWeather(weatherInput.value);
});

/* DETECT AND SAVE CHANGES WHEN SLIDERS OF THE TIMER, DATE AND WEATHER DESCRIPTION FONT SIZE ARE CHANGED */
// TIME
clockFontSize.addEventListener("input", () => {
  timeFontSize = clockFontSize.value;
});
clockFontSize.addEventListener("change", () => {
  if (timeFontSize) {
    localStorage.setItem("clockFontSize", timeFontSize.toString());
  }
});
// DATE
document.getElementById("dateFontSize").addEventListener("input", () => {
  dateSize = document.getElementById("dateFontSize").value;
});
document.getElementById("dateFontSize").addEventListener("change", () => {
  if (dateSize) {
    localStorage.setItem("dateFontSize", dateSize.toString());
  }
});
// WEATHER DESCRIPTION
document
  .getElementById("weatherDescriptionFontSize")
  .addEventListener("input", () => {
    weatherDescriptionFontSize = document.getElementById(
      "weatherDescriptionFontSize"
    ).value;
  });
document
  .getElementById("weatherDescriptionFontSize")
  .addEventListener("change", () => {
    if (weatherDescriptionFontSize) {
      localStorage.setItem(
        "weatherDescriptionFontSize",
        weatherDescriptionFontSize
      );
    }
    console.log(weatherDescriptionFontSize);
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
document.getElementById("clockSwitchCheckbox").addEventListener("click", () => {
  localStorage.setItem(
    "isClockActive",
    document.getElementById("clockSwitchCheckbox").checked.toString()
  );
});

/* READ CHANGING VALUES OF COLOR PICKER AND ALPHA SLIDER */
// HOURS
document
  .getElementById("hoursColorSelectionColor")
  .addEventListener("change", () => {
    hoursColor = document.getElementById("hoursColorSelectionColor").value;
    localStorage.setItem("hoursColorSelectionColor", hoursColor);
  });
document
  .getElementById("hoursColorSelectionAlpha")
  .addEventListener("input", () => {
    hoursAlpha = document.getElementById("hoursColorSelectionAlpha").value;
  });
document
  .getElementById("hoursColorSelectionAlpha")
  .addEventListener("change", () => {
    localStorage.setItem("hoursColorSelectionAlpha", hoursAlpha.toString());
  });

// MINUTES
document
  .getElementById("minutesColorSelectionColor")
  .addEventListener("change", () => {
    minutesColor = document.getElementById("minutesColorSelectionColor").value;
    localStorage.setItem("minutesColorSelectionColor", minutesColor);
  });
document
  .getElementById("minutesColorSelectionAlpha")
  .addEventListener("input", () => {
    minutesAlpha = document.getElementById("minutesColorSelectionAlpha").value;
  });
document
  .getElementById("minutesColorSelectionAlpha")
  .addEventListener("change", () => {
    localStorage.setItem("minutesColorSelectionAlpha", minutesAlpha.toString());
  });

// SECONDS
document
  .getElementById("secondsColorSelectionColor")
  .addEventListener("change", () => {
    secondsColor = document.getElementById("secondsColorSelectionColor").value;
    localStorage.setItem("secondsColorSelectionColor", secondsColor);
  });
document
  .getElementById("secondsColorSelectionAlpha")
  .addEventListener("input", () => {
    secondsAlpha = document.getElementById("secondsColorSelectionAlpha").value;
  });
document
  .getElementById("secondsColorSelectionAlpha")
  .addEventListener("change", () => {
    localStorage.setItem("secondsColorSelectionAlpha", secondsAlpha.toString());
  });

// HANDLE CHANGE OF DATE, TIME AND DESCRIPTION FONT COLOR

// time color
document.getElementById("timeColor").addEventListener("change", () => {
  timesFontColor = document.getElementById("timeColor").value;
  localStorage.setItem("timeColor", timesFontColor);
});
// date color
document.getElementById("dateColor").addEventListener("change", () => {
  datesFontColor = document.getElementById("dateColor").value;
  localStorage.setItem("dateColor", datesFontColor);
});
// description color
document.getElementById("descriptionColor").addEventListener("change", () => {
  descriptionsFontColor = document.getElementById("descriptionColor").value;
  localStorage.setItem("descriptionColor", descriptionsFontColor);
});

// handle checkbox input change of weather description
document
  .getElementById("weatherDescriptionCheckbox")
  .addEventListener("change", () => {
    isWeatherDescriptionActive = document
      .getElementById("weatherDescriptionCheckbox")
      .checked.toString();
    localStorage.setItem(
      "weatherDescriptionCheckbox",
      isWeatherDescriptionActive
    );
  });

// handle date format input
document.getElementById("dateFormat").addEventListener("change", () => {
  let formatIndex = document.getElementById("dateFormat").selectedIndex;
  localStorage.setItem("dateFormatIndex", formatIndex.toString());
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
