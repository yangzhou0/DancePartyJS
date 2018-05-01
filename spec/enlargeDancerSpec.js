describe('enlargeDancer', function() {

  var enlargeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    enlargeDancer = new makeEnlargeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(enlargeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(enlargeDancer.$node, 'animate');
    enlargeDancer.step();
    expect(enlargeDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(enlargeDancer, 'step');
      expect(enlargeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...

      expect(enlargeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(enlargeDancer.step.callCount).to.be.equal(2);
    });
  });
});
