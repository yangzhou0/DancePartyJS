var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  this.repeat = makeDancer.prototype.step;
  this.pause = timeBetweenSteps;
  this.flag = 0;
  makeDancer.call(this, top, left, timeBetweenSteps);
  var $img = $('<img src=\"assets/GIFs/dancingTree.gif\"></img>');
  this.$node.append($img);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function



};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.repeat(this.pause);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  let pos1 = this.top - 20;
  let pos2 = this.top;

  if(this.flag === 0){

    this.$node.animate({'top': `${pos1}px`},this.pause);
    this.flag++;
  }
  else{
    this.$node.animate({'top': `${pos2}px`},this.pause);
    this.flag--;
  }
};
