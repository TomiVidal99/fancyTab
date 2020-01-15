const treeAnimation = document.getElementById("treeAnimation");
const bubbleAnimation = document.getElementById("bubbleAnimation");
const noneAnimation = document.getElementById("noneAnimation");
const clockFontSize = document.getElementById("clockFontSize");
const dateSizeElement = document.getElementById("dateFontSize");
const weatherDescriptionFontSizeElement = document.getElementById(
  "weatherDescriptionFontSize"
);
const clockThicknessElement = document.getElementById("clockThickness");
const clocksColorSelectionLabel = document.getElementById(
  "clocksColorSelectionLabel"
);
const hoursColorSelectionLabel = document.getElementById(
  "hoursColorSelectionLabel"
);
const hoursColorSelectionColor = document.getElementById(
  "hoursColorSelectionColor"
);
const hoursColorSelectionAlpha = document.getElementById(
  "hoursColorSelectionAlpha"
);
const minutesColorSelectionLabel = document.getElementById(
  "minutesColorSelectionLabel"
);
const minutesColorSelectionColor = document.getElementById(
  "minutesColorSelectionColor"
);
const minutesColorSelectionAlpha = document.getElementById(
  "minutesColorSelectionAlpha"
);
const secondsColorSelectionLabel = document.getElementById(
  "secondsColorSelectionLabel"
);
const secondsColorSelectionColor = document.getElementById(
  "secondsColorSelectionColor"
);
const secondsColorSelectionAlpha = document.getElementById(
  "secondsColorSelectionAlpha"
);
const clockSettingsTitle = document.getElementById("clockSettingsTitle");
const timeColorLabel = document.getElementById("timeColorLabel");
const dateColorLabel = document.getElementById("dateColorLabel");
const numbersColorTitle = document.getElementById("numbersColorTitle");
const timeColor = document.getElementById("timeColor");
const dateColor = document.getElementById("dateColor");
const descriptionColorLabel = document.getElementById("descriptionColorLabel");
const weatherDescriptionLabel = document.getElementById(
  "weatherDescriptionLabel"
);

let browserLang;

// define initial values when executed code for the first time

function defineDocumentText() {
  // define values of select of animations depends of languague
  treeAnimation.innerHTML = languague.treeAnimation;
  bubbleAnimation.innerHTML = languague.bubbleAnimation;
  noneAnimation.innerHTML = languague.noneAnimation;

  let index;
  let storedIndex = localStorage.getItem("animation");
  if (storedIndex) {
    index = parseInt(storedIndex);
    selectAnimations.selectedIndex = storedIndex;
  } else {
    index = 0;
  }

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

  // define languague accordingly
  if (localStorage.getItem("lang") == "es") {
    selectLanguague.selectedIndex = 0;
  } else if (localStorage.getItem("lang") == "en") {
    selectLanguague.selectedIndex = 1;
  }

  // define initial value for the font of the time
  if (localStorage.getItem("clockFontSize")) {
    clockFontSize.value = parseInt(localStorage.getItem("clockFontSize"));
  } else {
    let size = innerHeight / 25 + innerWidth / 25;
    clockFontSize.value = size;
    localStorage.setItem("clockFontSize", size.toString());
  }

  // define initial value for the font size of the date inside the clock
  if (localStorage.getItem("dateFontSize")) {
    dateSizeElement.value = parseInt(localStorage.getItem("dateFontSize"));
  } else {
    dateSizeElement.value = 20;
    localStorage.setItem("dateFontSize", "20");
  }

  // define initial value for the font size of the weather descrition
  if (localStorage.getItem("weatherDescriptionFontSize")) {
    weatherDescriptionFontSizeElement.value = parseInt(
      localStorage.getItem("weatherDescriptionFontSize")
    );
    weatherDescriptionFontSize = weatherDescriptionFontSizeElement.value;
  } else {
    weatherDescriptionFontSizeElement.value = 8;
    weatherDescriptionFontSize = 8;
    localStorage.setItem("weatherDescriptionFontSize", "8");
  }

  // define inital value for the size of the hours ring
  if (localStorage.getItem("clockHoursSize")) {
    clockHoursSize.value = parseInt(localStorage.getItem("clockHoursSize"));
  } else {
    clockHoursSize.value = 420;
    localStorage.setItem("clockHoursSize", clockHoursSize.value.toString());
  }

  // define inital value for the size of the minutes ring
  if (localStorage.getItem("clockMinutesSize")) {
    clockMinutesSize.value = parseInt(localStorage.getItem("clockMinutesSize"));
  } else {
    clockMinutesSize.value = 400;
    localStorage.setItem("clockMinutesSize", clockMinutesSize.value.toString());
  }

  // define inital value for the size of the seconds ring
  if (localStorage.getItem("clockSecondsSize")) {
    clockSecondsSize.value = parseInt(localStorage.getItem("clockSecondsSize"));
  } else {
    clockSecondsSize.value = 380;
    localStorage.setItem("clockSecondsSize", clockSecondsSize.value.toString());
  }

  // define the initial value for the thickness of the clock
  if (localStorage.getItem("clockThickness")) {
    clockThicknessElement.value = parseInt(
      localStorage.getItem("clockThickness")
    );
  } else {
    clockThicknessElement.value = 4;
    localStorage.setItem(
      "clockThickness",
      clockThicknessElement.value.toString()
    );
  }

  if (localStorage.getItem("timeColor")) {
    timeColor.value = localStorage.getItem("timeColor");
    timesFontColor = localStorage.getItem("timeColor");
  } else {
    localStorage.setItem("timeColor", "#ffffff");
    timesFontColor = "#ffffff";
  }

  if (localStorage.getItem("dateColor")) {
    dateColor.value = localStorage.getItem("dateColor");
    datesFontColor = localStorage.getItem("dateColor");
  } else {
    localStorage.setItem("dateColor", "#ffffff");
    datesFontColor = "#ffffff";
  }

  if (localStorage.getItem("descriptionColor")) {
    descriptionColor.value = localStorage.getItem("descriptionColor");
    descriptionsFontColor = localStorage.getItem("descriptionColor");
  } else {
    localStorage.setItem("descriptionColor", "#ffffff");
    descriptionsFontColor = "#ffffff";
  }

  // define placeholders texts
  imgInput.setAttribute("placeholder", languague.imagePlaceholder);
  weatherInput.setAttribute("placeholder", languague.weatherPlaceholder);

  // define creators stamp
  document.getElementById("creatorStamp").innerHTML = languague.creatorsStamp;

  // define text for clock's activation switch
  document.getElementById("clockSwitchLabel").innerHTML =
    languague.clockSwitchLabel;

  // define text for animations description label
  document.getElementById("animationsSelectorLabel").innerHTML =
    languague.animationsSelectorLabel;

  // define text for label of the font sizes
  document.getElementById("fontSizeLabel").innerHTML = languague.fontSizeLabel;
  document.getElementById("clockFontSizeLabel").innerHTML =
    languague.clockFontSizeLabel;
  document.getElementById("dateFontSizeLabel").innerHTML =
    languague.dateFontSizeLabel;
  document.getElementById("weatherDescriptionFontSizeLabel").innerHTML =
    languague.weatherDescriptionFontSizeLabel;

  // define title for clockSettingsTitle
  clockSettingsTitle.innerHTML = languague.clockSettingsTitle;

  // define time and date color labels
  timeColorLabel.innerHTML = languague.timeColorLabel;
  dateColorLabel.innerHTML = languague.dateColorLabel;

  // define text for clocks hours, seconds, minutes and thickness labels
  clockHoursSizeLabel.innerHTML = languague.clockHoursSizeLabel;
  clockMinutesSizeLabel.innerHTML = languague.clockMinutesSizeLabel;
  clockSecondsSizeLabel.innerHTML = languague.clockSecondsSizeLabel;
  clockThicknessLabel.innerHTML = languague.clockThicknessLabel;

  hoursColorSelectionLabel.innerHTML = languague.clockHoursSizeLabel;
  minutesColorSelectionLabel.innerHTML = languague.clockMinutesSizeLabel;
  secondsColorSelectionLabel.innerHTML = languague.clockSecondsSizeLabel;

  // set initial value for the clock's switch checkbox
  let isClockActiveValue = localStorage.getItem("isClockActive");
  if (isClockActiveValue) {
    if (isClockActiveValue == "true") {
      document.getElementById("clockSwitchCheckbox").checked = true;
      localStorage.setItem("isClockActive", "true");
    } else if (isClockActiveValue == "false") {
      document.getElementById("clockSwitchCheckbox").checked = false;
      localStorage.setItem("isClockActive", "false");
    } else {
      console.log("error");
    }
  } else {
    document.getElementById("clockSwitchCheckbox").checked = true;
    localStorage.setItem("isClockActive", "true");
  }

  // intial values of colors picker and alpha slider for clocks settings
  // colors pickers
  if (localStorage.getItem("hoursColorSelectionColor")) {
    hoursColorSelectionColor.value = localStorage.getItem(
      "hoursColorSelectionColor"
    );
  } else {
    hoursColorSelectionColor.value = "#ff0000";
    localStorage.setItem("hoursColorSelectionColor", "#ff0000");
  }

  if (localStorage.getItem("minutesColorSelectionColor")) {
    minutesColorSelectionColor.value = localStorage.getItem(
      "minutesColorSelectionColor"
    );
  } else {
    minutesColorSelectionColor.value = "#00ff00";
    localStorage.setItem("minutesColorSelectionColor", "#00ff00");
  }

  if (localStorage.getItem("secondsColorSelectionColor")) {
    secondsColorSelectionColor.value = localStorage.getItem(
      "secondsColorSelectionColor"
    );
  } else {
    secondsColorSelectionColor.value = "#910090";
    localStorage.setItem("secondsColorSelectionColor", "#910090");
  }

  // sliders
  if (localStorage.getItem("hoursColorSelectionAlpha")) {
    hoursColorSelectionAlpha.value = parseInt(
      localStorage.getItem("hoursColorSelectionAlpha")
    );
  } else {
    hoursColorSelectionAlpha.value = 40;
    localStorage.setItem("hoursColorSelectionAlpha", "40");
  }

  if (localStorage.getItem("minutesColorSelectionAlpha")) {
    minutesColorSelectionAlpha.value = parseInt(
      localStorage.getItem("minutesColorSelectionAlpha")
    );
  } else {
    minutesColorSelectionAlpha.value = 40;
    localStorage.setItem("minutesColorSelectionAlpha", "40");
  }

  if (localStorage.getItem("secondsColorSelectionAlpha")) {
    secondsColorSelectionAlpha.value = parseInt(
      localStorage.getItem("secondsColorSelectionAlpha")
    );
  } else {
    secondsColorSelectionAlpha.value = 40;
    localStorage.setItem("secondsColorSelectionAlpha", "40");
  }

  // define inital value for clocks colors selection label
  document.getElementById("clocksColorSelectionLabel").innerHTML =
    languague.clocksColorSelectionLabel;

  // define number's color title for details tag, innerHTML of summary
  numbersColorTitle.innerHTML = languague.numbersColorTitle;

  // define description color's label
  descriptionColorLabel.innerHTML = languague.descriptionColorLabel;

  // define innerHTML of weather description label and value of weather description checkbox
  weatherDescriptionLabel.innerHTML = languague.weatherDescriptionLabel;
  if (localStorage.getItem("weatherDescriptionCheckbox")) {
    if (localStorage.getItem("weatherDescriptionCheckbox") == "true") {
      weatherDescriptionCheckbox.checked = true;
    } else {
      weatherDescriptionCheckbox.checked = false;
    }
    isWeatherDescriptionActive = localStorage.getItem(
      "weatherDescriptionCheckbox"
    );
  } else {
    localStorage.setItem("weatherDescriptionCheckbox", "true");
    isWeatherDescriptionActive = "true";
    weatherDescriptionCheckbox.checked = "true";
  }

  if (!localStorage.getItem("lang")) {
    // Define global languague retrieving browser's languague
    browserLang = navigator.language || navigator.userLanguage;
  } else {
    browserLang = localStorage.getItem("lang");
  }

  // handle format indexing retrival for the date selection
  if (localStorage.getItem("dateFormatIndex")) {
    document.getElementById("dateFormat").selectedIndex = localStorage.getItem(
      "dateFormatIndex"
    );
  }

  // handle languague selection for the options of select tag of the date's format
  document.getElementById("dateFormatSelector").innerHTML =
    languague.dateFormatSelector;
  for (let i = 1; i < 9; i++) {
    let s = "format_" + i.toString();
    document.getElementById(s).innerHTML = languague[s];
  }
}

window.onload = defineDocumentText();
