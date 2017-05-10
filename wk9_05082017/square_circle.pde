

int frameRateValue; // variable used to store the current frame rate value
int gridSize = 20;
int margin = 60;
float gutter = 40; //distance between each cell
float cellsize;//declare cellsize

void setup() {

  // make the display window the full size of the screen
  size(600, 600);

  frameRateValue = 15;
  rectMode(CENTER);
  //background(255);
  cellsize = ( width - (2 * margin) - gutter * (gridSize - 1) ) / (gridSize - 1); //define cellsize
}


void draw() {

  background(255);
  int circleNumber = 0; // counter
  for (int i=0; i<gridSize; i++) {
    for (int j=0; j<gridSize; j++) {
      circleNumber = (i * gridSize) + j; // different way to calculate the circle number from w2_04

      float tx = margin + cellsize * i + gutter * i;
      float ty = margin + cellsize * j + gutter * j;

      movingCircle(tx, ty, cellsize, circleNumber);
    }
  }
} //end of draw 


void movingCircle(float x, float y, float size, int offset) {

  float circlePeriod = (float)frameRateValue;
  float circleAge = (float)((frameCount + offset) % (int)circlePeriod) / circlePeriod; // % is modulo operator 
  float circleSize = size * 1.5 * sin(circleAge * PI);

  strokeWeight(2);
  stroke(random(0, 255), circleAge);
  fill(random(242, 252), random(37, 252),  random(0, 255), random(95, 100));
  //random(90, 100) alpha
  rect(x-size/6, y-size/6, circleSize, circleSize);
  
  fill(random(242, 252), random(0, 255), random(0, 255));
  ellipse(x-size/2, y-size/2, circleSize/2, circleSize/2);

}


/*
 * keyReleased function
 *
 * called automatically by Processing when a keyboard key is released
 */
void keyReleased() {

  // right arrow -- increase frameRateValue
  if (keyCode == RIGHT && frameRateValue < 120) {
    frameRateValue++;
  }

  // left arrow -- decrease frameRateValue
  if ( keyCode == LEFT && frameRateValue > 2) {
    frameRateValue--;
  }

  // print the current value on the screen
  println("Current frame Rate is: " + frameRateValue);
}