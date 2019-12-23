function clock(h, rh, gh, bh, m, rm, gm, bm, s, rs, gs ,bs, a, width_, height_, hs, ms, ss, thick) {
  const absolutePos = 0.5;
  
  let alpha = a;
  let _width = width_;
  let _height = height_;
  let hSize = hs;
  let mSize = ms;
  let sSize = ss;
  let thickness = thick; 
  
  //hours 

  push();
  let hours = map(h, 0, 24, 0, TWO_PI);
  noFill();
  strokeWeight(thickness);
  stroke(rh, gh, bh, alpha);
  arc(_width/2, _height*(absolutePos), hSize, hSize, PI + PI/2, hours + PI + PI/2 , PI + QUARTER_PI);
  pop();

  // minutes

  push();
  let minutes = map(m, 0, 60, 0, TWO_PI);
  noFill();
  strokeWeight(thickness);
  stroke(rm, gm, bm, alpha);
  arc(_width/2, _height*(absolutePos), mSize, mSize, PI + PI/2, minutes + PI + PI/2 , PI + QUARTER_PI);
  pop();

  // seconds
  push();
  let seconds = map(s, 0, 60, 0, TWO_PI);
  noFill();
  strokeWeight(thickness);
  stroke(rs, gs, bs, alpha);
  arc(_width/2, _height*(absolutePos), sSize, sSize, PI + PI/2, seconds + PI + PI/2 , PI + QUARTER_PI);
  pop();
  
}