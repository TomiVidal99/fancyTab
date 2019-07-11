const tree = [];
let howBigTree = 100;
let root1, root2, angle, canvas, spot1, spot2, spot3, inputCityValue, images, weatherURL, tempElement, humElement, bgImage, imagesOn, animationsOn, weatherDescription;
let colored = false;

const languague = "es";

const weatherAPILink = "https://api.openweathermap.org/data/2.5/weather?q=";
const weatherAPIKey = "&APPID=0b440372cffdd59274b4e0e2594c2f86";

function setup() {    
  
    canvas = createCanvas(innerWidth, innerHeight);
    canvas.style("z-index", "-2");
    canvas.position(0, 0);    
    defineTreeSpots();
    createTreeLog();    
  
    tempElement = document.getElementById("currentTemp");
    humElement = document.getElementById("currentHumidity");
    
    loaded();
  
}

function draw() {  
      
    frameRate(80);  
  
    time = new Date();
    let h = time.getHours(); 
    let m = time.getMinutes();
    let s = time.getSeconds();
    
    let a = time.toTimeString();
    let b = a.split(" ");

    if (localStorage.getItem("animationsOn") == "true") {
      animationsOn = "true";
    } else if (localStorage.getItem("animationsOn") == "false") {
      animationsOn = "false";
    }
  
    if (bgImage) {
      background(bgImage);
      clock(h, m, s, 255, 0, 0, 90, innerWidth, innerHeight);
    } else {
      background(0);
      if (animationsOn == "true") {
        generateTree();
      }
      clock(h, m, s, 255, 0, 0, 40, innerWidth, innerHeight);
    }
        
    
    timeDisplay(b[0], new Intl.DateTimeFormat('es-AR').format(time), innerWidth, innerHeight);
  
}

function handleBGImage(img) {
  bgImage = img;
  document.getElementById("___gcse_0").style.display = "none";
}

function obtainWeather(city) {
  if (city) {
    let tempVal = city.replace(" ", "%20"); 
    weatherURL = weatherAPILink + tempVal + weatherAPIKey + "&lang=" + languague + "&units=metric";
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


function generateTree() {
    tree.forEach(
        function(branch){
            branch.draw(angle);              
            if ( !branch.hasBranch && tree.length < howBigTree) {
                tree.push(branch.branchRight());                
                tree.push(branch.branchLeft());                
                branch.hasBranch = true;
            }
        });
    if (tree[(howBigTree-1)] && !colored) {
        colored = true;
        defineColorForAll();
    }
}

function createTreeLog() {    
    root1 = new Branch(createVector(spot1, height), createVector(spot1, height-(height/7)), 5);
    root2 = new Branch(createVector(spot3, height), createVector(spot3, height-(height/7)), 5);
    tree.push(root1, root2);            
    randomizer();
}

function defineTreeSpots() {
    spot1 = windowWidth * (1/4);
    spot2 = windowWidth * (2/4);
    spot3 = windowWidth * (3/4);    
}

function reDefineTrees() {
    howBigTree = round(random(100, 500));
    if (tree.length > 0) {
      tree.splice(0, tree.length);    
    }
    createTreeLog();    
    defineTreeSpots();    
    colored = !colored;
}

function defineColorForAll() {
    tree.forEach(
        function(branch){
            branch.setColor();
        }
    );
}

function keyPressed() {
    if (keyCode === RETURN) {
      reDefineTrees();
    }
}

