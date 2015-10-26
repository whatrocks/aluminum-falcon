var GrowStar = function(x, y, z, timeBetweenSteps, docHeight, docWidth) {
  MoveStar.apply(this, arguments);
};
GrowStar.prototype = Object.create(MoveStar.prototype);
GrowStar.prototype.constructor = GrowStar;
GrowStar.prototype.step = function(){

  //largest size when closest
  var size = ( (1 - (this.z / 32)) * 3 );
  this.$node.css('border', size +'px solid white');

  MoveStar.prototype.step.call(this);
};
