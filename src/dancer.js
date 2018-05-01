// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.left = left;
  this.top = top;
  this.step(timeBetweenSteps);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

makeDancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var dancer = this;
  var timeout = setTimeout(function() {
    dancer.step();
  }, timeBetweenSteps);
  dancer.$node.data('timeout', timeout);
};


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.top = top;
  this.left = left;
  var dancer = this;
  var styleSettings = {
    top: top,
    left: left
  };
  dancer.$node.css(styleSettings);
  dancer.$node.data('instance', dancer);
  // dancer.$node.data('left', left);
};

makeDancer.prototype.reSize = function(){
  var dancer = this;
  var styleSettings = {
    height: '150px',
    width: 'auto'
  };
  dancer.$node.css(styleSettings);
}
