/**
 * Represents a Tadpole
 * @class
 * @constructor
 * @param {number} x - The initial x position of the Tadpole
 * @param {number} y - The initial y position of the Tadpole
 */
function Tadpole(x, y) {

  /** A variable to hold the location of the Tadpole
   * @var { p5.Vector } location
   */
  this.location = createVector(x, y);

  /** A variable to hold the velocity of the Tadpole
   *  @var { p5.Vector } velocity
   */
  this.velocity = p5.Vector.random2D().normalize().mult(random(1, 6));

  /** A variable for the radius of the Tadpole
   * @var { number } radius
   */
  this.radius = random(1, 2);

  /**
   * Updates the position of the Tadpole based on the velocity vector
   */
  this.update = function() {
    this.location.add(this.velocity);
  }

  /**
   * Checks to see if the Tadpole gets to the edge of the sketch
   * If it does, it changes direction to stay on the sketch
   */
  this.edges = function() {
    if (this.location.x > windowWidth || this.location.x < 0) {
      this.velocity.x *= -1;
    }
    if (this.location.y > windowHeight || this.location.y < 0) {
      this.velocity.y *= -1;
    }
  }

  /**
   * Applies a given force to the velocity of the Tadpole
   * @param { p5.Vector } f - The input vector that gets applied
   *
   */
  this.applyForce = function(f) {
    this.velocity.add(f);
    this.velocity.limit(3);
  }

  /**
   * Displays the tadpoles on the screen
   */
  this.display = function() {

    fill(0);
    stroke(0);
    /* The commented code below was used to help with colorin
      the tadpoles based on the distance from the mouse */
    // var maxDist = dist(0, 0, windowWidth, windowHeight);
    // var col = dist(this.location.x, this.location.y, mouseX, mouseY);
    // col = map(col, 0, maxDist, 0, 150);
    // fill(255 - col);
    // stroke(255 - col);
    // if (col < 12) {
    //   fill(255);
    //   stroke(255);
    // }
    ellipse(this.location.x, this.location.y, this.radius, this.radius);
  }

  /**
   * Helper function that runs the the internal edges(), update() and display() functions
   * @see {@link edges}
   * @see {@link update}
   * @see {@link display}
   */
  this.run = function() {
    this.edges();
    this.update();
    this.display();
  }
}
