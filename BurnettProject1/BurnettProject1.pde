////////////////////////////////////////
//Julia Burnett - Project 1 - 2/9/2021//
////////////////////////////////////////

//Module 1 - Processing Review Assignment

//this shows the colors used
color bgc = color(0);
color ballColor = color(13,255,164);
color boxColor = color (255,80,127);
color textColor = color(70,255,10);

//this shows the boxes dimensions
float boxX = 100;
float boxY = 100;
float boxW = 300;
float boxH = 300;

String t = "Congrats! You choose '" + ballColor + "'";
float textX = 100;
float textY = 50;
float textW = 100;
float textH = 100;

float circleX = 0;
float circleY = 0;
float circleW = 50;
float circleH = 50;
float xSpeed = 1.5;
float ySpeed = 1.5;



void setup() {
  size(500, 500);

}

void draw() {
  background(bgc);
  
  fill(boxColor);
  rect(boxX, boxY, boxW, boxH);
  
  if (mouseIsOverBox()) {
  boxColor = color(255,108,150);

  } else {
    boxColor = color(125);
  }
  
  noStroke();
  
  fill(ballColor);
  
  ellipse(circleX, circleY , circleW, circleH);
  
  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;

  //bounce off left and right
  if(circleX < 0 || circleX > width){
    xSpeed = xSpeed * -1;
  }

  // bounce off top and bottom
  if(circleY < 0 || circleY > height) {
    ySpeed = ySpeed * -1;
  }
  
 
  
}


void mousePressed() {
  ballColor = color(random(255),random(255),random(255));
  
  fill(textColor);
  textSize(20);
  textAlign(CENTER, CENTER);
  //text(t, textX, textY, textW, textH);  // Text wraps within text box
  
}

void keyPressed() {
  bgc = color(random(255),random(255),random(255));
  println("Congrats, you pressed '" + key + "' key");
}

boolean mouseIsOverBox() {
  if (((mouseX > boxX) && (mouseX < (boxX + boxW))) && ((mouseY > boxY) && (mouseY < (boxY + boxH)))) {
    return true;
  } else {
    return false;
  }
}