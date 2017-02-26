var angle = 0.0
var speed = 0.005
var c = 244
var loop_1 = 6
var loop_2 = 8
var range1 = 0
var range2 = 300

function setup() {
  createCanvas(windowWidth, windowHeight)
  noFill()
}

function draw() {
  
  var l0 = map(mouseX, 0, width, range1, range2)
  var l1 = map(mouseY, 0, height, range1, range2)

  background(59)
  
  translate(width/2, height/2)
  rotate(angle)
  

  for (var i = 0; i < loop_1; i++){
    push()
    rotate(i * TWO_PI/loop_1)
    translate(0, l0)
    stroke(c)
    ellipse(0, 0, 10, 10)
    triangle(30, 75, 58, 2, 15, 5);
    pop()
     
    rotate(angle)
    for(var j = 0; j < loop_2; j++) {
      push()
      rotate(j * TWO_PI/loop_2)
      translate(0, l1)
      stroke(c)
      ellipse(0, 0, 5, 5)
      rect(30, 4, 5, 55, 2);
      pop()
    }
   
  }
  
  angle += speed
}