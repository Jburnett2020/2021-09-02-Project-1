////////////////////////////////////////
//Julia Burnett - Project 1 - 2/9/2021//
////////////////////////////////////////

//Module 1 - Processing Review Assignment

//this shows the colors used
// Declare and initialize colors
let bgc; // Declare bgc without initialization here to avoid issues
let ballColor;
let boxColor;
let textColor;

// Box dimensions and position
let boxX = 100;
let boxY = 100;
let boxW = 300;
let boxH = 300;

// Text properties
let t;
let textX = 100;
let textY = 50;
let textW = 100;
let textH = 100;

// Circle properties
let circleX = 0;
let circleY = 0;
let circleW = 50;
let circleH = 50;
let xSpeed = 1.5;
let ySpeed = 1.5;

function setup() {
  createCanvas(500, 500);
  bgc = color(0); // Initialize bgc here
  ballColor = color(13, 255, 164);
  boxColor = color(255, 80, 127);
  textColor = color(70, 255, 10);
  t = "Congrats! You choose '" + ballColor + "'";
}

function draw() {
  background(bgc);

  fill(boxColor);
  rect(boxX, boxY, boxW, boxH);

  if (mouseIsOverBox()) {
    boxColor = color(255, 108, 150);
  } else {
    boxColor = color(125);
  }

  noStroke();

  fill(ballColor);
  ellipse(circleX, circleY, circleW, circleH);

  circleX += xSpeed;
  circleY += ySpeed;

  // Bounce off left and right
  if (circleX < 0 || circleX > width) {
    xSpeed *= -1;
  }

  // Bounce off top and bottom
  if (circleY < 0 || circleY > height) {
    ySpeed *= -1;
  }
}

function mousePressed() {
  ballColor = color(random(255), random(255), random(255));
  fill(textColor);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(t, textX, textY, textW, textH); // Text wraps within text box
}

function keyPressed() {
  bgc = color(random(255), random(255), random(255));
  console.log("Congrats, you pressed '" + key + "' key");
}

function mouseIsOverBox() {
  return (mouseX > boxX && mouseX < boxX + boxW) && (mouseY > boxY && mouseY < boxY + boxH);
}