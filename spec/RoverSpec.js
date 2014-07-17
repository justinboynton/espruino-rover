describe("Rover", function() {
  var rover;

  beforeEach(function(){
    rover = new Rover();
    // mock our Espruino functions
    digitalWrite = jasmine.createSpy();
    rover.eyes = function() { };
    rover.eyes.move = jasmine.createSpy();
    rover.sensor = function() { };
    rover.sensor.trigger = jasmine.createSpy();
  });

  it("should be able to move forwards", function() {
    rover.moveForward();
    expect(rover.currentDirection).toEqual('forward');
    expect(digitalWrite).toHaveBeenCalled();
  });

  it("should be able to move backwards", function() {
    rover.moveBackward();
    expect(rover.currentDirection).toEqual('reverse');
    expect(digitalWrite).toHaveBeenCalled();
  });

  it("should be able to turn left", function() {
    rover.turnLeft();
    expect(rover.currentDirection).toEqual('left');
    expect(rover.currentMovingStatus).toEqual('stationary');
    expect(digitalWrite).toHaveBeenCalled();
  });

  it("should be able to turn right", function() {
    rover.turnRight();
    expect(rover.currentDirection).toEqual('right');
    expect(rover.currentMovingStatus).toEqual('stationary');
    expect(digitalWrite).toHaveBeenCalled();
  });

  it("should be able to move left", function() {
    rover.moveLeft();
    expect(rover.currentDirection).toEqual('left');
    expect(rover.currentMovingStatus).toEqual('moving');
    expect(digitalWrite).toHaveBeenCalled();
  });

  it("should be able to turn right", function() {
    rover.moveRight();
    expect(rover.currentDirection).toEqual('right');
    expect(rover.currentMovingStatus).toEqual('moving');
    expect(digitalWrite).toHaveBeenCalled();
  });

  it("should be able to stop", function() {
    rover.stop();
    expect(rover.currentMovingStatus).toEqual('stationary');
    expect(digitalWrite).toHaveBeenCalled();
  });

  it("should be able to resume travel", function() {
    rover.resume();
    expect(rover.currentMovingStatus).toEqual('moving');
  });

  it("should be able to look left", function() {
    rover.lookLeft();
    expect(rover.eyes.move).toHaveBeenCalled();
    expect(rover.currentLeftDistance).toBeDefined();
  });

  it("should be able to look right", function() {
    rover.lookRight();
    expect(rover.eyes.move).toHaveBeenCalled();
    expect(rover.currentRightDistance).toBeDefined();
  });

  it("should be able to look ahead", function() {
    rover.lookAhead();
    expect(rover.eyes.move).toHaveBeenCalled();
    expect(rover.currentForwardDistance).toBeDefined();
  });

});
