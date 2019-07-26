const tree = [];
let howBigTree = 100;
let inputCityValue, images, wetherURL, tempElement, humElement, bgImage, imagesOn, animationsOn, weatherDescription, bgColor, treesActive, bubblesActive;
let colored = false;

const weatherAPILink = "https://api.openweathermap.org/data/2.5/weather?q=";
const weatherAPIKey = "&APPID=0b440372cffdd59274b4e0e2594c2f86";

function setup() {    
  
    canvas = createCanvas(innerWidth, innerHeight);
    canvas.style("z-index", "-2");
    canvas.position(0, 0);    

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
      clock(h, m, s, 255, 0, 0, 90, innerWidth, innerHeight);
    } else {
      background(bgColor);
      if (treesActive) {
        generateTree();
      } else if (bubblesActive) {
        startBubbleAnimation(true);  
      }
      clock(h, m, s, 255, 0, 0, 40, innerWidth, innerHeight);
    }
        
    timeDisplay(b[0], new Intl.DateTimeFormat('es-AR').format(time), innerWidth, innerHeight);
  
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

function timeDisplay(time, date, w, h) {
  let width_ = w;
  let heigth_ = h;
  let timeSize = ((0.07)*width_);
  let dateSize = (20);
  let descriptionSize = (0.02*width_);
  push();
    noStroke();
    fill(255);
    textAlign(CENTER);
    textFont('Helvica', timeSize);
    text(time, width_/2, heigth_/2);
    textSize(dateSize);
    text(date, width_/2, heigth_/2 + 30);
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

