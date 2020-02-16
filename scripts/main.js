const tree = [];
let howBigTree = 100;
let langJSON,
  initialValues,
  images,
  wetherURL,
  tempElement,
  humElement,
  bgImage,
  imagesOn,
  weatherDescription,
  bgColor;
let colored = false;

// Define global language retrieving browser's language
let browserLang = localStorage.getItem("lang") || navigator.language.split("-")[0] || navigator.userLanguage.split("-")[0] || "en";

const weatherAPILink = "https://api.openweathermap.org/data/2.5/weather?q=";
const weatherAPIKey = "&APPID=0b440372cffdd59274b4e0e2594c2f86";

function preload() {
  // load json containing languages for posterior usage
  langJSON = loadJSON('../assets/languages.json');
  // load json containing all the inital values for sliders clocks color, etc
  initialValues =  loadJSON('../assets/initialValues.json');
}

function setup() {
  canvas = createCanvas(innerWidth, innerHeight);
  canvas.style("z-index", "-2");
  canvas.position(0, 0);

  defineFontSizeTime();
  defineClockCharacteristics();
  defineInitialValuesForClocksParameters();

  // trees animation
  defineTreeSpots();
  createTreeLog();

  // bubbles animation
  createInitialBubbles();

  tempElement = document.getElementById("currentTemp");
  humElement = document.getElementById("currentHumidity");

  // define text 
  handleLanguage(langJSON[browserLang]);
  
  // push from localStorage all the values saved to initialValues json
  defineStoredValues();

  loaded();
}

function draw() {

  // background color
  bgColor = color(initialValues["backgroundColor"]);

  time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  let a = time.toTimeString();
  let b = a.split(" ");

  if (bgImage) {
    background(bgImage);
    
  } else {
    background(bgColor);
    switch(initialValues["animationsIndex"]) {
      case "0":
        break;
      case "2":
        generateTree();
        break;
      case "1":
        startBubbleAnimation(true);
        break;
    }
    
  }

  if (clockSwitchCheckbox.checked) {
    clock(
      h,
      initialValues["hoursColorSelectionColor"],
      initialValues["hoursColorSelectionAlpha"],
      m,
      initialValues["minutesColorSelectionColor"],
      initialValues["minutesColorSelectionAlpha"],
      s,
      initialValues["secondsColorSelectionColor"],
      initialValues["secondsColorSelectionAlpha"],
      innerWidth,
      innerHeight,
      initialValues["clockHoursSize"],
      initialValues["clockMinutesSize"],
      initialValues["clockSecondsSize"],
      initialValues["clockThickness"]
    );
  }

  handleTimeDisplay(b[0], initialValues["timeColor"], initialValues["clockFontSize"]);
  handleDateDisplay(handleDateFormat(time, parseInt(initialValues["dateFormat"])), initialValues["dateColor"], initialValues["dateFontSize"]);
  handleDescriptionDisplay(weatherDescription, initialValues["descriptionColor"], initialValues["weatherDescriptionFontSize"]);

}

function defineClockCharacteristics() {
  hoursSize = document.getElementById("clockHoursSize").value;
  minutesSize = document.getElementById("clockMinutesSize").value;
  secondsSize = document.getElementById("clockSecondsSize").value;
  clockThickness = document.getElementById("clockThickness").value;
}

function defineInitialValuesForClocksParameters() {
  hoursAlpha = document.getElementById("hoursColorSelectionAlpha").value;
  minutesAlpha = document.getElementById("minutesColorSelectionAlpha").value;
  secondsAlpha = document.getElementById("secondsColorSelectionAlpha").value;

  hoursColor = document.getElementById("hoursColorSelectionColor").value;
  minutesColor = document.getElementById("minutesColorSelectionColor").value;
  secondsColor = document.getElementById("secondsColorSelectionColor").value;
}

function defineFontSizeTime() {
  timeFontSize = document.getElementById("clockFontSize").value;
  dateSize = document.getElementById("dateFontSize").value;
}

function handleBGImage(img) {
  bgImage = img;
  //handleColorDetection(img, 150);
}

function obtainWeather(city) {
  // define language for the weather API
  let weatherLanguage = "&lang=" + browserLang;
  if (city) {
    let tempVal = city.replace(" ", "%20");
    weatherURL =
      weatherAPILink +
      tempVal +
      weatherAPIKey +
      weatherLanguage +
      "&units=metric";
    loadJSON(weatherURL, processWeatherData, noWeatherMatch);
  }
}

processWeatherData = weather => {
  //console.log(weather);
  document.getElementById("weatherInput").style.backgroundColor = "white";
  tempElement.innerHTML = "Temp: " + weather.main.temp.toString() + "°C";
  humElement.innerHTML = "Hum: " + weather.main.humidity.toString() + "%";
  weatherDescription = weather.weather[0].description;
};

function noWeatherMatch(error) {
  document.getElementById("weatherInput").style.backgroundColor = "#f07a75";
}

window.onresize = function() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  defineFontSizeTime();
  reDefineTrees();
};

function randomizer() {
  angle = random(PI / 10, PI / 4);
  tree.splice(3, tree.length);
  tree[0].hasBranch = false;
  tree[1].hasBranch = false;
}

function displayInfo(images) {
  console.log(images);
}

function handleDateFormat(time, option) {
  const options = [
    { weekday: "long", year: "numeric", month: "long", day: "numeric" },
    { weekday: "short", year: "numeric", month: "short", day: "numeric" },
    { weekday: "narrow", year: "numeric", month: "short", day: "numeric" },
    { weekday: "narrow", year: "numeric", month: "narrow", day: "numeric" },
    { weekday: "long", year: "numeric", month: "numeric", day: "numeric" },
    { weekday: "short", year: "numeric", month: "numeric", day: "numeric" },
    { weekday: "narrow", year: "numeric", month: "numeric", day: "numeric" }
  ];
  if (option == 7) {
    let a = new Intl.DateTimeFormat(browserLang, options[option]).format(time);
    b = a.split(" ");
    if (b.length > 1) {
      return b[1];
    } else {
      return b[0];
    }
  } else {
    return new Intl.DateTimeFormat(browserLang, options[option]).format(time);
  }
}

function keyPressed() {
  if (keyCode === RETURN) {
    reDefineTrees();
  }
}
