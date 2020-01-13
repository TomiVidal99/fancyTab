const imgAPILink = "https://pixabay.com/api/?key=";
const imgAPIKey = "12856838-d43243abae778dd8eb428f99c";

function getImagesJSON(e) {
  let weatherWord = e.replace(" ", "%20");
  let url = imgAPILink + imgAPIKey + "&q=" + weatherWord + "&image_type=photo";
  if (weatherWord != "") {
    loadJSON(url, handleImages);
  } else {
    if (bgImage) {
      bgImage = null;
    }
  }
}

function handleImages(images) {
  let imageNumber = Math.round(random(0, images.hits.length));
  //console.log(images);
  if (images.hits.length > 0) {
    let backgroundImgURL = images.hits[imageNumber].largeImageURL;
    loadImage(backgroundImgURL, handleBGImage, () => {console.log("Error with images parameters")});
    document.getElementById("imgInput").style.backgroundColor = "white";
  } else {
    document.getElementById("imgInput").style.backgroundColor = "#f07a75";
  }
}

