
var particles = [];
var gravity;
var amount = 100
var msg = "drag me around"

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < amount; i++) {
    particles[i] = new Particle(random(0.01, 2), random(width), random(height));
  }
  gravity = new Gravity();
}

function draw() {

  background(245);

  gravity.display();

  for (var i = 0; i < particles.length; i++) {
    var force = gravity.calculateAttraction(particles[i]);
    particles[i].applyForce(force);

    particles[i].update();
    particles[i].display();
  }
}

function mousePressed() {
  gravity.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  gravity.handlePress(mouseX, mouseY);
  gravity.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  gravity.stopDragging();
}
