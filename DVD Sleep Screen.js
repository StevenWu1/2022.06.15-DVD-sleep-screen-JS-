function setup() {
  createCanvas(600, 400);
}

let squareX = 0;
let speed = 3;
let squarey = 0;
let speedy = 3;
let squareSize = 50;
let border = 10;

function draw() {
  Catch();
  background("rgba(0, 0, 0, 0.02)");
  stroke("white");
  strokeWeight(border);
  rect(squareX, squarey + border, 130, squareSize+10);
  textSize(50);
  text('DVD', squareX + 10, squarey + border + 40);
  if (squareX > width - border - squareSize - 60) {
    speed = speed * -1;
    fillSquare();
  } 
  if (squareX < 0) {
    speed = speed * -1;
    fillSquare();
  }
  if (squarey > height - squareSize - border) {
    speedy = speedy * -1;
    fillSquare();
  }
  if (squarey < 0) {
    speedy = speedy * -1;
    fillSquare();
  }
  squareX = squareX + speed;  
  squarey = squarey + speedy;
}

function fillSquare() {
  fill(random(0, 255), random(0, 255), random(0, 255));
}

function Catch() {
  if (mouseIsPressed) {
    speed = 0;
    speedy = 0;
}
}

function mouseReleased() {
  speed = 3;
  speedy = 3;
}
