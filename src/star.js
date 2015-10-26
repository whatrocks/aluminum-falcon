var Star = function(x, y, z, timeBetweenSteps, docHeight, docWidth) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="star"></span>');

  this.x = x;
  this.y = y;
  this.z = z;
  this.timeBetweenSteps = timeBetweenSteps;

  this.docHeight = docHeight;
  this.docWidth = docWidth;

  this.destroyed = false;
  this.step();
  this.setPosition();

};

Star.prototype.step = function() {
  if (this.$node.data('kill') === 'killed'){
    this.kill();
  } else {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
   
};

Star.prototype.setPosition = function() {

  //some constant
  var k = 128.0 / this.z;
  //projected x and y
  var px = (this.x * k) + (this.docWidth / 2);
  var py = (this.y * k) + (this.docHeight / 2);

  var styleSettings = {
    top: py,
    left: px
  };

  this.$node.css(styleSettings);
  
};

Star.prototype.kill = function(){
  setTimeout(function(){
    this.remove();
    clearTimeout(this.timer);
  }.bind(this.$node), 500);
};
