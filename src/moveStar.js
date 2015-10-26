var MoveStar = function(x, y, z, timeBetweenSteps, docHeight, docWidth) {
  Star.apply(this, arguments);
};

MoveStar.prototype = Object.create(Star.prototype);
MoveStar.prototype.constructor= MoveStar;
MoveStar.prototype.step = function() {

  Star.prototype.setPosition.call(this);
  
  this.z -= 0.2;

  if(this.z <= 0){
    this.x = randomInRange(25);
    this.y = randomInRange(25);
    //place as far away as possible
    this.z = 31;
  }

  Star.prototype.step.call(this);
};

var randomInRange = function(n){
      var sign = Math.random() > 0.5 ? 1 : -1;
      var number = sign * Math.floor( Math.random() * n);
      return number;
};
