const treeAnimation = document.getElementById("treeAnimation");
const bubbleAnimation = document.getElementById("bubbleAnimation");
const noneAnimation = document.getElementById("noneAnimation"); 
const clockFontSize = document.getElementById("clockFontSize"); 
const dateSizeElement = document.getElementById("dateFontSize");
const clockThicknessElement = document.getElementById("clockThickness");
const clockSwitchCheckbox = document.getElementById("clockSwitchCheckbox");
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
        let size = (innerHeight / 25) + (innerWidth / 25);
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
      clockThicknessElement.value = parseInt(localStorage.getItem("clockThickness"));
    } else {
        clockThicknessElement.value = 4;
        localStorage.setItem("clockThickness", clockThicknessElement.value.toString());
    }

    // define initial value of checkbox if the clock is active
    if (localStorage.getItem("isClockActive")) {
      clockSwitchCheckbox.checked = localStorage.getItem("isClockActive");
    } else {
      clockSwitchCheckbox.checked = true;
      localStorage.setItem("isClockActive", "true");
    }
    
    // define placeholders texts
    imgInput.setAttribute("placeholder", languague.imagePlaceholder);
    weatherInput.setAttribute("placeholder", languague.weatherPlaceholder);  

    // define creators stamp
    document.getElementById("creatorStamp").innerHTML = languague.creatorsStamp;

    // define text for clock's activation switch
    document.getElementById("clockSwitchLabel").innerHTML = languague.clockSwitchLabel;

    // define text for animations description label
    document.getElementById("animationsSelectorLabel").innerHTML = languague.animationsSelectorLabel;

    // define text for label of the font sizes
    document.getElementById("fontSizeLabel").innerHTML = languague.fontSizeLabel;
    document.getElementById("clockFontSizeLabel").innerHTML = languague.clockFontSizeLabel;
    document.getElementById("dateFontSizeLabel").innerHTML = languague.dateFontSizeLabel;
    

    // define text for clocks hours, seconds, minutes and thickness labels
    document.getElementById("clockHoursSizeLabel").innerHTML = languague.clockHoursSizeLabel;
    document.getElementById("clockMinutesSizeLabel").innerHTML = languague.clockMinutesSizeLabel;
    document.getElementById("clockSecondsSizeLabel").innerHTML = languague.clockSecondsSizeLabel;
    document.getElementById("clockThicknessLabel").innerHTML = languague.clockThicknessLabel;

    // Define global languague retrieving browser's languague
    browserLang = navigator.language || navigator.userLanguage;

}

window.onload = defineDocumentText();
