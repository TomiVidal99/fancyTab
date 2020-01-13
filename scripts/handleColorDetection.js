// Detect colors of current image being display in the background.

function handleColorDetection(img, ct) {

	let colorTolerance = ct;
	let whitePixelCounter = 0;

	img.loadPixels();
	console.log(img.pixels);

	const begginingHalfPixels = Math.floor(img.width*(img.height/2-4))+(img.width/5);
	const finishingHalfPixels = Math.floor(img.width*(img.height/2+4))+(img.width/5);

	let total = 0;

	for (let i = begginingHalfPixels; i < finishingHalfPixels; i = i + 4) {

		let r = img.pixels[i];
		let g = img.pixels[i + 1];
		let b = img.pixels[i + 2];

		total += r + g + b;

	}
	
	let average = total/(3*(finishingHalfPixels - begginingHalfPixels));

	console.log(average);
	if (average > colorTolerance) {
		console.log("Change font color for more contrast");
	}

}