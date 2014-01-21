(function(){
  'use strict';
  $(document).ready(initialize);
  
  function initialize(){
    $('#addButtons').click(clickShowButtons);
    $('#buttonA').hide();
    $('#buttonB').hide();
    $('#buttonA').click(removeFirstButton);
    $('#buttonB').click(removeSecondButton);
  }

  function clickShowButtons(){
    $('#buttonA').show();
    $('#buttonB').show();

  }

  function removeFirstButton(){
    $('#addButtons').detach();
  }

  function removeSecondButton(){
    $('#buttonA').detach();
    $('h1').text('I AM THE KING BUTTON').css('font-size','50px');
  }


})();
