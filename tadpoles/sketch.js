//Used for holding a multitude of Tadpole objects
var tadpoles = [];

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('bgSketch');

  for (var i = 0; i < 50; i++) {
    tadpoles.push(new Tadpole(random(windowWidth), random(windowHeight), 3, 5, 100));
  }
}

function draw() {
  background(255, 50);
  for (var i = 0; i < tadpoles.length; i++) {
    tadpoles[i].run();
    tadpoles[i].applyForce(createVector(random(-0.5, 0.5), random(-0.5, 0.5)));
  }
}

//Used to automatically resize the canvas to the window size.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
