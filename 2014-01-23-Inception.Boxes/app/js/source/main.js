/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#inceptionButton').click(clickMakeBoxes);
  }

  function clickMakeBoxes(){
    var numBoxes = $('#boxInput').val();
    numBoxes = parseInt(numBoxes);
    var startLoc = 200;
    var startSize = 800;
    var newStart = startLoc;
    var newSize = startSize;
    for(var i = 1; i <= numBoxes; i++){
      var $div = $('<div>');
      $div.css('background-color', randomColor());
      $div.css('z-index', i);
      $div.css('height', newSize + 'px').css('width', newSize + 'px');
      $div.css('top', newStart + 'px').css('left', newStart + 'px');
      $('#outsideBox').prepend($div);
      newStart = newStart + 5;
      newSize = newSize - 10;
    }

  }

  function randomColor(){
      var r = Math.floor(Math.random()*256);
      var g = Math.floor(Math.random()*256);
      var b = Math.floor(Math.random()*256);

      return 'rgb(' + r + ',' + g + ',' + b + ')';
    }


})();
