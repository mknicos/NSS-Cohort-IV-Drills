(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#addOption').click(addToList);
    $('#selector').change(changeColor);

  }

  function addToList(){
    var input = $('#colorInput').val();
    var $option = $('<option>');
    var lowerInput = input.toLowerCase();
    var upperInput = input.toUpperCase();
    $option.val(lowerInput);
    $option.text(upperInput);
    $('#selector').append($option);
    $('#colorInput').val('');
    $('#colorInput').focus();
  }

  function changeColor(){
    var color = $('#selector').val();
    $('#box').css('background-color', color);
  }



})();
