(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#addColors').click(clickAddColors);  //When button is clicked, clickAddColors function is called

  }

  function clickAddColors(){

    var colorText = $('#inputColors').val();        //Get input from user in text box
    var colorArray = colorText.split(',');          //Turn input into a string
    var sum = 0;
    for(var i = 1; i <= colorArray.length; i ++){  //For loop will create a new div for every item in string
      var $div = $('<div>');
      var color = colorArray[i-1];                //The -1 will allow the loop to start with first color in string while
      $div.css('background-color', color);        //the text displayed will start at 1
      $div.text([i]);
      $('#container').append($div);              //Add colored div to screen
      sum += i;
    }
    var $sum = $('<div>');         //Create final div
    $sum.text(sum);
    var r = Math.floor((Math.random()*256));    //creates random color in r,g,b format
    var g = Math.floor((Math.random()*256));
    var b = Math.floor((Math.random()*256));
    $sum.css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');  //add random color to new div
    $('#container').append($sum);
  }













})();
