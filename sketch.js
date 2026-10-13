function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(135, 206, 235); 

  drawMountains();

  drawSun(300, 90);
}

function drawMountains() {
  stroke(60);
  strokeWeight(1);

  fill(90, 100, 120);
  triangle(-50, 400, 100, 150, 250, 400);
  fill(255);                       
  triangle(100, 150, 76, 190, 124, 190);

  fill(120, 135, 155);
  triangle(150, 400, 300, 200, 450, 400);
  fill(255);                       
  triangle(300, 200, 274, 235, 326, 235);
}

function drawSun(x, y) {
  translate(x, y);              
  rotate(frameCount * 0.02);   

  stroke(255, 200, 0);
  strokeWeight(4);
  for (let i = 0; i < 8; i++) {
    line(45, 0, 70, 0);
    rotate(0.785);
  }

  fill(255, 220, 0);
  circle(0, 0, 80);
}
