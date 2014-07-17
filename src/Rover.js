function Rover() {
  this.currentLeftDistance;
  this.accumulatedDistance = 0;
  this.thnkingCount = 1;
}
Rover.prototype.moveForward = function() {
  this.stop();
  this.currentMovingStatus = "moving";
  this.currentDirection = "forward";
  digitalWrite("B14", 1);
  digitalWrite("A1", 1);
};
Rover.prototype.moveBackward = function() {
  this.stop();
  this.currentMovingStatus = "moving";
  this.currentDirection = "reverse";
  digitalWrite("B13", 1);
  digitalWrite("A0", 1);
};
Rover.prototype.turnLeft = function() {
  this.stop();
  this.currentDirection = "left";
  this.currentMovingStatus = "stationary";
  digitalWrite("B14", 1);
  setTimeout(function() { this.stop(); }, 1000);
};
Rover.prototype.turnRight = function() {
  this.stop();
  this.currentDirection  = "right";
  this.currentMovingStatus = "stationary";
  digitalWrite("A1", 1);
  setTimeout(function() { this.stop(); }, 1000);
};
Rover.prototype.moveLeft = function() {
  this.stop();
  this.currentMovingStatus = "moving";
  this.currentDirection = "left";
  digitalWrite("B14", 1);
};
Rover.prototype.moveRight = function() {
  this.stop();
  this.currentMovingStatus = "moving";
  this.currentDirection  = "right";
  digitalWrite("A1", 1);
};
Rover.prototype.stop = function() {
  this.currentMovingStatus = "stationary";
  digitalWrite("B14", 0);
  digitalWrite("A1", 0);
  digitalWrite("B13", 0);
  digitalWrite("A0", 0);
};
Rover.prototype.resume = function() {
  this.currentMovingStatus = "moving";
  if(this.currentDirection == "forward")
    this.moveForward();
  else if(this.currentDirection == "reverse")
    this.moveBackward();
};
Rover.prototype.lookLeft = function() {
  this.currentLeftDistance = 0;
  eyes.move(0);
  this.watch();
  setTimeout(function() { this.currentLeftDistance = this.accumulatedDistance / this.thinkingCount; }, 1000);
};
Rover.prototype.lookRight = function() {
  this.currentRightDistance = 0;
  eyes.move(1);
  this.watch();
  setTimeout(function() { this.currentRightDistance = this.accumulatedDistance / this.thinkingCount; }, 1000);
};
Rover.prototype.lookAhead = function() {
  this.currentForwardDistance = 0;
  eyes.move(1);
  this.watch();
  setTimeout(function() { this.currentForwardDistance = this.accumulatedDistance / this.thinkingCount; }, 1000);
};
Rover.prototype.watch = function() {
  this.accumulatedDistance = 0;
  this.thinkingCount = 1;
  this.watchInterval  = setInterval(sensor.trigger(), 50);
  setTimeout(function() { clearInterval(this.watchInterval); }, 1000);
};
