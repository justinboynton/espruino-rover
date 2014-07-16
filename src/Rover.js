function Rover() {
}
Rover.prototype.moveForward = function() {
  this.currentDirection = "forward";
};
Rover.prototype.moveBackward = function() {
  this.currentDirection = "reverse";
};
Rover.prototype.turnLeft = function() {
  this.currentDirection = "left";
};
Rover.prototype.turnRight = function() {
  this.currentDirection  = "right";
};
