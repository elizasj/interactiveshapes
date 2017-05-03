
void setup() {
  size(600, 600);
  rectMode(CORNER);
  noStroke();
  frameRate(2);  // set the frame rate to 1 draw() call per second
}


void draw() {
  background(#FAF2F2); // clear the screen to grey
  
  int gridSize = (int) random(10, 50);   // select a random number of squares each frame
  int gap = (int) random(3, 24); // select a random gap between each square
  
  // calculate the size of each square for the given number of squares and gap between them
  float cellsize = (width - (gridSize + 1) * gap ) / (float)gridSize;
  
  // print out the size of each square
  println("cellsize = " + cellsize);
  
  // calculate shadow offset
  float offsetX = cellsize/16.0;
  float offsetY = cellsize/16.0;
 

    for (int i=0; i<gridSize; i++) {
      for (int j=0; j<gridSize; j++) {

        fill(random(0, 255), random(0, 255), random(0, 255), random(0, 100)); // shadow
        rect(gap * (i+1) + cellsize * i + offsetX, gap * (j+1) + cellsize * j + offsetY, cellsize, cellsize);
        
        fill(random(0, 255), random(0, 255), random(0, 255), random(0, 255)); // rectangle
        ellipse(gap * (i+1) + cellsize * i, gap * (j+1) + cellsize * j, cellsize, cellsize);
        
         fill(random(0, 140), random(0, 140)); // shadow
        ellipse(gap * (i+1) + cellsize * i + offsetX, gap * (j+1) + cellsize * j + offsetY, cellsize, cellsize);
        
        fill(random(0, 255), random(0, 255), random(0, 255), random(0, 255)); // rectangle
        ellipse(gap * (i+1) + cellsize / i, gap * (j+random(0, 1000)) + cellsize * j, cellsize, cellsize);
      }
    }
    
    // save your drawing when you press keyboard 's'
  if (keyPressed == true && key=='s') {
    saveFrame("test###.jpg");
  }
} //end of draw 