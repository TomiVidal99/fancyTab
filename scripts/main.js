const tree = [];
let howBigTree = 100;
let inputCityValue, images, wetherURL, tempElement, humElement, bgImage, imagesOn, animationsOn, weatherDescription, bgColor, treesActive, bubblesActive, timeFontSize, dateSize, hoursSize, minutesSize, secondsSize, clockThickness, hoursColor, minutesColor, secondsColor, hoursAlpha, secondsAlpha, minutesAlpha, timesFontColor, datesFontColor, descriptionsFontColor, isWeatherDescriptionActive;
let colored = false;

const weatherAPILink = "https://api.openweathermap.org/data/2.5/weather?q=";
const weatherAPIKey = "&APPID=0b440372cffdd59274b4e0e2594c2f86";

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
    
    bgColor = color(0);

    loaded();
  
}

function draw() {  
      
    time = new Date();
    let h = time.getHours(); 
    let m = time.getMinutes();
    let s = time.getSeconds();
    
    let a = time.toTimeString();
    let b = a.split(" ");

    if (bgImage) {
      background(bgImage);
      if (clockSwitchCheckbox.checked) {
        clock(h, hoursColor, hoursAlpha, m, minutesColor, minutesAlpha, s, secondsColor, secondsAlpha, innerWidth, innerHeight, hoursSize, minutesSize, secondsSize, clockThickness);
      }
    } else {
      background(bgColor);
      if (treesActive) {
        generateTree();
      } else if (bubblesActive) {
        startBubbleAnimation(true);  
      }
      if (clockSwitchCheckbox.checked) {
        clock(h, hoursColor, hoursAlpha, m, minutesColor, minutesAlpha, s, secondsColor, secondsAlpha, innerWidth, innerHeight, hoursSize, minutesSize, secondsSize, clockThickness);
      }
    }
        
    timeDisplay(b[0], handleDateFormat(time, document.getElementById("dateFormat").selectedIndex), innerWidth, innerHeight, timeFontSize, dateSize, timesFontColor, datesFontColor, descriptionsFontColor);

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
  if (city) {
    let tempVal = city.replace(" ", "%20"); 
    weatherURL = weatherAPILink + tempVal + weatherAPIKey + languague.weather + "&units=metric";
    loadJSON(weatherURL, processWeatherData, noWeatherMatch);
  }
}

processWeatherData = (weather) => {
  //console.log(weather);
  document.getElementById("weatherInput").style.backgroundColor = "white";
  tempElement.innerHTML = "Temp: " + weather.main.temp.toString() + "°C";
  humElement.innerHTML = "Hum: " + weather.main.humidity.toString() + "%";
  weatherDescription = weather.weather[0].description;
}

function noWeatherMatch(error) {
  document.getElementById("weatherInput").style.backgroundColor = "#f07a75";
}

window.onresize = function() {    
    resizeCanvas(window.innerWidth, window.innerHeight);
    defineFontSizeTime();
    reDefineTrees();
}

function randomizer() {    
    angle = random(PI/10, PI/4);      
    tree.splice(3, tree.length); 
    tree[0].hasBranch = false;
    tree[1].hasBranch = false;    
}

function displayInfo(images) {
  console.log(images)
}

function handleDateFormat(time, option) {
  const options = [
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
    { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' },
    { weekday: 'narrow', year: 'numeric', month: 'short', day: 'numeric' },
    { weekday: 'narrow', year: 'numeric', month: 'narrow', day: 'numeric' },
    { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' },
    { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' },
    { weekday: 'narrow', year: 'numeric', month: 'numeric', day: 'numeric' }
  ];
  console.log(new Intl.DateTimeFormat(browserLang, options[option]).format(time));
  return(new Intl.DateTimeFormat(browserLang, options[option]).format(time));
}

function timeDisplay(time, date, w, h, ts, ds, tColor, dColor, descriptionC) {
  let width_ = w;
  let heigth_ = h;
  let timeSize = ts;
  let dateSize = ds;
  let descriptionSize = ((0.02*width_) + dateSize/5);
  let tc = color(tColor);
  let dc = color(dColor);
  let descriptionColor = color(descriptionC);
  push();
    noStroke();
    fill(tc);
    textAlign(CENTER);
    textFont('Helvica', timeSize);
    text(time, width_/2, heigth_/2);
    textFont('Helvica', dateSize);
    fill(dc);
    text(date, width_/2, heigth_/2 + ((10/8)*dateSize));
    if (weatherDescription && isWeatherDescriptionActive == "true") {
      push();
      fill(descriptionColor);
      textStyle(ITALIC);
      textFont('Georgia',descriptionSize);
      text(weatherDescription, width_/2, heigth_/2 + 80 + (dateSize/2));
      pop();
    }
  pop();
}


function keyPressed() {
    if (keyCode === RETURN) {
      reDefineTrees();
    }
}

