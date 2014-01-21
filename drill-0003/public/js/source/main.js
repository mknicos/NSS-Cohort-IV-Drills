(function (){
  'use strict';

  function  initialize(){
    $('#add-color').click(clickAddColor);
  }
  $(document).ready(initialize);

  function clickAddColor(){
    var userColor= $('#color-text').val();
    $('#color-text').val('');
    $('#color-text').focus();

    var $box = $('<div>');
    $box.addClass('color');
    $box.css('background-color', userColor);
    $('#colors').prepend($box);
  }

})();
