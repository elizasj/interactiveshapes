var Gravity = function() {
  this.position = createVector(width/2, height/2);
  this.mass = 5;
  this.G = 1;
  this.dragOffset = createVector(0, 0);
  this.dragging = false;

  this.calculateAttraction = function(m) {
    var force = p5.Vector.sub(this.position, m.position);
    var distance = force.mag();
    distance = constrain(distance, 2, 4);
    force.normalize();
    var strength = (this.G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
  };

  this.display = function() {
    stroke(227, 87, 133)
    strokeWeight(3)
    line(this.position.x - 5, this.position.y - 5, this.position.x + 5, this.position.y + 5);
    line(this.position.x + 5, this.position.y - 5, this.position.x - 5 , this.position.y + 5);
    noStroke()
    fill(227, 87, 133)
    text(msg, this.position.x + 10, this.position.y + 10)
  };

  this.handlePress = function(mx, my) {
    var d = dist(mx, my, this.position.x, this.position.y);
    if (d < this.mass) {
      this.dragging = true;
      this.dragOffset.x = this.position.x - mx;
      this.dragOffset.y = this.position.y - my;
    }
  };

  this.stopDragging = function() {
    this.dragging = false;
  };

  this.handleDrag = function(mx, my) {
    if (this.dragging) {
      this.position.x = mx + this.dragOffset.x;
      this.position.y = my + this.dragOffset.y;
    }
  };
};
