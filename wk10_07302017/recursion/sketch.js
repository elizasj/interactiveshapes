var x, y, rad, currentX, currentY, lowerBound, upperBound, stroked, normX, normY, backgroundColor

function setup() {
  createCanvas(displayWidth, displayHeight)
  backgroundColor = color(242)

  x = windowWidth / 2
  y = windowHeight / 2
  rad = 200

  fill(random(255), random(255), random(255), 50)
}

function draw() {
  background(backgroundColor);
  rectMode(CENTER)
  noStroke()

  currentX = mouseX
  currentY = mouseY
  lowerBound = 0
  upperBound = width
  normX = norm(currentX, lowerBound, upperBound)
  normY = norm(currentY, lowerBound, upperBound)

  shrinkRect(x, y, rad, stroked)
}


function shrinkRect(x, y, rad) {
  rect(x, y, rad, rad)

  if (rad <= 1) return

  if (rad > 1) {
    shrinkRect(x + rad / 2, y, rad  * normX)
    shrinkRect(x - rad / 2, y, rad  * normY)
  }
}