describe("Rover", function() {
  var rover;

  beforeEach(function(){
    rover = new Rover();
  });

  it("should be able to move forwards", function() {
    rover.moveForward();
    expect(rover.currentDirection).toEqual('forward');
  });

  it("should be able to move backwards", function() {
    rover.moveBackward();
    expect(rover.currentDirection).toEqual('reverse');
  });

  it("should be able to turn left", function() {
    rover.turnLeft();
    expect(rover.currentDirection).toEqual('left');
  });

  it("should be able to turn right", function() {
    rover.turnRight();
    expect(rover.currentDirection).toEqual('right');
  });

});
