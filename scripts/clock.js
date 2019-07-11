function clock(h, m, s, r, g ,b, a, width_, height_) {
  const absolutePos = 0.5;
  
  let alpha = a;
  let _width = width_;
  let _height = height_;
  let thickness = ((_width/_height)*5);
  
  push();
  
  //hours 
    
  let hours = map(h, 0, 24, 0, TWO_PI);
  noFill();
  strokeWeight(thickness + 5);
  stroke(255, 0,0, alpha);
  arc(_width/2, _height*(absolutePos), _width/3, _width/3, PI + PI/2, hours + PI + PI/2 , PI + QUARTER_PI);
  
  // minutes
  
  let minutes = map(m, 0, 60, 0, TWO_PI);
  noFill();
  strokeWeight(thickness + 2);
  stroke(255, 0,255, alpha);
  arc(_width/2, _height*(absolutePos), _width/3.3, _width/3.3, PI + PI/2, minutes + PI + PI/2 , PI + QUARTER_PI);
  
  // seconds
  
  let seconds = map(s, 0, 60, 0, TWO_PI);
  noFill();
  strokeWeight(thickness);
  stroke(255, 100, 100, alpha);
  arc(_width/2, _height*(absolutePos), _width/3.6, _width/3.6, PI + PI/2, seconds + PI + PI/2 , PI + QUARTER_PI);
  
  pop();
  
}