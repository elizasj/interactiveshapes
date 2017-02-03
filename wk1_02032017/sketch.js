const r = 100
    g = 103
    b = 154
    a = 255
    reset = 255

function setup() {
 createCanvas(windowWidth, windowHeight) 
 dot = new Dot()
}

function draw() {
  background(255)

  dot.display_dot()

  var d = dist(dot.pos.x, dot.pos.y, mouseX, mouseY)

  if (d < 60) {
    a = a - 2;
    dot.tremble()
  } else {
    a = reset
    dot.display_dot
  }
}

function Dot() {
  this.pos = createVector(windowWidth/2, windowHeight/2)

  this.tremble = function() {
    var tremblex = (random(-10, 10))
    var trembley = (random(-10, 10))

    noStroke()
    fill(r, g, b, a)
    ellipse(this.pos.x + tremblex, this.pos.y + trembley, 100, 100)
  }

  this.display_dot = function() {
    noStroke()
    fill(r, g, b, a)
    ellipse(this.pos.x, this.pos.y, 100, 100)
  }
}