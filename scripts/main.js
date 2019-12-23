const tree = [];
let howBigTree = 100;
let inputCityValue, images, wetherURL, tempElement, humElement, bgImage, imagesOn, animationsOn, weatherDescription, bgColor, treesActive, bubblesActive, timeFontSize, dateSize, hoursSize, minutesSize, secondsSize, clockThickness;
let colored = false;

const weatherAPILink = "https://api.openweathermap.org/data/2.5/weather?q=";
const weatherAPIKey = "&APPID=0b440372cffdd59274b4e0e2594c2f86";

function setup() {    
  
    canvas = createCanvas(innerWidth, innerHeight);
    canvas.style("z-index", "-2");
    canvas.position(0, 0);    

    defineFontSizeTime();
    defineClockCharacteristics();
    

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
        clock(h, 255, 0, 0, m, 0, 255, 0, s, 0, 0, 255, 40, innerWidth, innerHeight, hoursSize, minutesSize, secondsSize, clockThickness);
      }
    } else {
      background(bgColor);
      if (treesActive) {
        generateTree();
      } else if (bubblesActive) {
        startBubbleAnimation(true);  
      }
      if (clockSwitchCheckbox.checked) {
        clock(h, 255, 0, 0, m, 0, 255, 0, s, 0, 0, 255, 40, innerWidth, innerHeight, hoursSize, minutesSize, secondsSize, clockThickness);
      }
    }
        
    timeDisplay(b[0], new Intl.DateTimeFormat(browserLang).format(time), innerWidth, innerHeight, timeFontSize, dateSize);
  
}

function defineClockCharacteristics() {
  hoursSize = document.getElementById("clockHoursSize").value;
  minutesSize = document.getElementById("clockMinutesSize").value;
  secondsSize = document.getElementById("clockSecondsSize").value;
  clockThickness = document.getElementById("clockThickness").value;
}

function defineFontSizeTime() {
  timeFontSize = document.getElementById("clockFontSize").value;
  dateSize = document.getElementById("dateFontSize").value;
}

function handleBGImage(img) {
  bgImage = img;
}

function obtainWeather(city) {
  if (city) {
    let tempVal = city.replace(" ", "%20"); 
    weatherURL = weatherAPILink + tempVal + weatherAPIKey + languague.weather + "&units=metric";
    loadJSON(weatherURL, processWeatherData, noWeatherMatch);
  }
}

processWeatherData = (weather) => {
  console.log(weather);
  document.getElementById("weatherInput").style.backgroundColor = "white";
  tempElement.innerHTML = "Temp: " + weather.main.temp.toString() + "°C";
  humElement.innerHTML = "Hum: " + weather.main.humidity.toString() + "%";
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

function timeDisplay(time, date, w, h, ts, ds) {
  let width_ = w;
  let heigth_ = h;
  let timeSize = ts;
  let dateSize = ds;
  let descriptionSize = (0.02*width_);
  push();
    noStroke();
    fill(255);
    textAlign(CENTER);
    textFont('Helvica', timeSize);
    text(time, width_/2, heigth_/2);
    textFont('Helvica', dateSize);
    text(date, width_/2, heigth_/2 + ((10/8)*dateSize));
    if (weatherDescription) {
      textFont('Georgia',descriptionSize);
      text(weatherDescription, width_/2, heigth_/2 + 80);
    }
  pop();
}


function keyPressed() {
    if (keyCode === RETURN) {
      reDefineTrees();
    }
}

