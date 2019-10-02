let treeAnimation = document.getElementById("treeAnimation");
let bubbleAnimation = document.getElementById("bubbleAnimation");
let noneAnimation = document.getElementById("noneAnimation"); 
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

    // define placeholders texts
    imgInput.setAttribute("placeholder", languague.imagePlaceholder);
    weatherInput.setAttribute("placeholder", languague.weatherPlaceholder);  

    // define creators stamp

    document.getElementById("creatorStamp").innerHTML = languague.creatorsStamp;

    // Define global languague retrieving browser's languague
    browserLang = navigator.language || navigator.userLanguage;

}

window.onload = defineDocumentText();