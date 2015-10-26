$(document).ready(function() {
  window.enemies = [];
  window.score = 0;
  window.body = $('body');
  window.bodyHeight = body.height();
  window.bodyWidth = body.width();

  // make stars
  for (var i = 0; i < 100; i++){
     buildStar();     
  }

//  generate tie fighters
  setInterval(function(){
    if (enemies.length < 15){
      buildTieFighter();
    }
  }, 2000);

  body.on('click', function(event){
    $('#laser').get(0).play();
  });

  //listen for click on tie fighter
  body.on('click', '.growImage', function(event){
    window.score++;
    $('#explosion').get(0).play();
    $('#score').text(score);
    $(this).attr('src', './img/explosion.gif').data('kill','killed');
  });
});

var randomInRange = function(n){
      var sign = Math.random() > 0.5 ? 1 : -1;
      var number = sign * Math.floor( Math.random() * n);
      return number;
};

var buildTieFighter = function(){
    var tiefighter = new GrowImage(
        randomInRange(25),
        randomInRange(25),
        32,
        50, bodyHeight, bodyWidth,
        "../img/tiefighter.png"
      );
    window.enemies.push(tiefighter);
    body.append(tiefighter.$node);
};

var buildStar = function(){
  var star = new GrowStar(
        randomInRange(25),
        randomInRange(25),
        Math.floor( 32 * Math.random() + 1),
        50, bodyHeight, bodyWidth 
      );
  body.append(star.$node);
};

