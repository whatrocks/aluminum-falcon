var GrowImage = function(x, y, z, timeBetweenSteps, docHeight, docWidth, imgSource) {
  MoveStar.apply(this, arguments);
  this.$node = $('<img draggable="false" class="growImage" src="' + imgSource + '"></img>');
  this.step();
  this.destroyed = false;
};

GrowImage.prototype = Object.create(MoveStar.prototype);
GrowImage.prototype.constructor = GrowImage;
GrowImage.prototype.step = function(){

  //largest size when closest
  var size = ( (1 - (this.z / 32)) * 100 );
  this.$node.css({height: size, width: size});

  if( this.x > 0 ){
    this.$node.addClass('growImage-right');
  } else {
    this.$node.removeClass('growImage-right');
  }

  console.log(this.$node);

  if(this.z <= 0.5 ){ 
    $('body').find('.falcon').addClass('shake');
    $('body').find('.injury').toggle();
    $('body').find('#hurt').get(0).play();

    setTimeout(function() {
      $('body').find('.falcon').removeClass('shake');
      $('body').find('.injury').toggle();
    }, 1000);

  }

  MoveStar.prototype.step.call(this);
  
};
