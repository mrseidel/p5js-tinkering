var tadpoles = [];

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('bgSketch');

  /*
    var myP = createP('This is sample text2.  The quick brown fox jumped over the lazy dogs.')
    myP.parent('contents');
  */
  for (var i = 0; i < 50; i++) {
    tadpoles.push(new Tadpole(random(windowWidth), random(windowHeight)));
  }
}

function draw() {
  background(255, 50);
  for (var i = 0; i < tadpoles.length; i++) {
    tadpoles[i].run();
    tadpoles[i].applyForce(createVector(random(-0.5, 0.5), random(-0.5, 0.5)));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Tadpole(x, y) {
  this.location = createVector(x, y);
  this.velocity = p5.Vector.random2D().normalize().mult(random(1, 6));
  this.radius = random(1, 2);

  this.update = function() {
    this.location.add(this.velocity);
  }

  this.edges = function() {
    if (this.location.x > windowWidth || this.location.x < 0) {
      this.velocity.x *= -1;
    }
    if (this.location.y > windowHeight || this.location.y < 0) {
      this.velocity.y *= -1;
    }
  }

  this.applyForce = function(f) {
    this.velocity.add(f);
    this.velocity.limit(3);
  }

  this.display = function() {
    var maxDist = dist(0, 0, windowWidth, windowHeight);
    var col = dist(this.location.x, this.location.y, mouseX, mouseY);
    col = map(col, 0, maxDist, 0, 150);
    fill(255 - col);
    stroke(255 - col);
    if (col < 12) {
      fill(255);
      stroke(255);
    }
    ellipse(this.location.x, this.location.y, this.radius, this.radius);
  }

  this.run = function() {
    this.edges();
    this.update();
    this.display();
  }
}
