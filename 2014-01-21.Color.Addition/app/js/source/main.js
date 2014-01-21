(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#addColors').click(clickAddColors);

  }

  function clickAddColors(){

    var colorText = $('#inputColors').val();
    var colorArray = colorText.split(',');
    var sum = 0;
    for(var i = 1; i <= colorArray.length; i ++){
      var $div = $('<div>');
      var color = colorArray[i-1];
      $div.css('background-color', color);
      $div.text([i]);
      $('#container').append($div);
      sum += i;
    }
    var $sum = $('<div>');
    $sum.text(sum);
    var r = Math.floor((Math.random()*255));
    var g = Math.floor((Math.random()*255));
    var b = Math.floor((Math.random()*255));
    $sum.css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
    $('#container').append($sum);
  }













})();
