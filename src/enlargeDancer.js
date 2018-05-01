var makeEnlargeDancer = function(top, left, timeBetweenSteps) {
  this.repeat = makeDancer.prototype.step;
  this.pause = timeBetweenSteps;
  this.flag = 0;
  makeDancer.call(this, top, left, timeBetweenSteps);
  var $img = $('<img src=\"assets/GIFs/hulaDancer.gif\"></img>');
  this.$node.append($img);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function



};

makeEnlargeDancer.prototype = Object.create(makeDancer.prototype);
makeEnlargeDancer.prototype.constructor = makeEnlargeDancer;

makeEnlargeDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.repeat(this.pause);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  if(this.flag===0){

    // this.$node.animate({border: '40px'},this.pause);
    this.$node.animate({'height': '250px'});
    this.flag++;
  }
  else{
    // this.$node.animate({border: '20px'},this.pause);
    this.$node.animate({'height': '150px'});
    this.flag--;
  }
};
