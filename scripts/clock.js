function clock(h, hColor, ha, m, mColor, ma, s, sColor, sa, width_, height_, hs, ms, ss, thick) {
  const absolutePos = 0.5;
  
  let _width = width_;
  let _height = height_;
  let hSize = hs;
  let mSize = ms;
  let sSize = ss;
  let thickness = thick; 
  let hc = color(hColor);
  let mc = color(mColor);
  let sc = color(sColor);
  let hAlpha = ha;
  let mAlpha = ma;
  let sAlpha = sa;

  //hours 

  push();
  let hours = map(h, 0, 24, 0, TWO_PI);
  noFill();
  strokeWeight(thickness);  
  stroke(255*hc._array[0],255* hc._array[1],255* hc._array[2], parseInt(hAlpha));
  arc(_width/2, _height*(absolutePos), hSize, hSize, PI + PI/2, hours + PI + PI/2 , PI + QUARTER_PI);
  pop();

  // minutes

  push();
  let minutes = map(m, 0, 60, 0, TWO_PI);
  noFill();
  strokeWeight(thickness*(3/4));
  stroke(255*mc._array[0],255*mc._array[1],255*mc._array[2], parseInt(mAlpha));
  arc(_width/2, _height*(absolutePos), mSize, mSize, PI + PI/2, minutes + PI + PI/2 , PI + QUARTER_PI);
  pop();

  // seconds
  push();
  let seconds = map(s, 0, 60, 0, TWO_PI);
  noFill();
  strokeWeight(thickness/2);
  stroke(255*sc._array[0],255* sc._array[1],255* sc._array[2], parseInt(sAlpha));
  arc(_width/2, _height*(absolutePos), sSize, sSize, PI + PI/2, seconds + PI + PI/2 , PI + QUARTER_PI);
  pop();
  
}