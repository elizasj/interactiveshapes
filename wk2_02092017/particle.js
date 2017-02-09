var Particle = function(mass, x, y) {
  this.position = createVector(x, y);
  this.velocity = createVector(1, 0);
  this.acceleration = createVector(0, 0);
  this.mass = mass;

  this.applyForce = function(force) {
    var f = p5.Vector.div(force,this.mass);
    this.acceleration.add(f);
  };

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.display = function() {
    noStroke();
    fill(255, 149, 203, 150);
    ellipse(this.position.x, this.position.y, this.mass*26, this.mass*26);
  };
};
