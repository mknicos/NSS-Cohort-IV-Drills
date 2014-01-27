(function(){
  'use strict';

  $(document).ready(init);
  var display= 0 ;
  var timer;

  function init(){
    $('#grow').click(clickGrow);
    $('#stop').click(clickStop);
  }

  function clickGrow(){
    var delay = $('#inputDelay').val();
    timer = setInterval(exponential, (delay * 1000));
  }

  function exponential(){
    var baseNum = $('#inputNum').val();
    var $li = $('<li>');
    var answer = Math.pow(baseNum,display);
    var x = (baseNum + ' ^ ' + display + ' = ' + answer);
    $li.text(x);
    $('#container').prepend($li);
    display ++;

  }

  function clickStop(){
    clearInterval(timer);
  }




})();
