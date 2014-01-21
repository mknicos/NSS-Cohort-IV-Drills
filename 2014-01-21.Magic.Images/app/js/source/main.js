(function(){
  'use strict';
  $(document).ready(initialize);

  function initialize(){
    $('#addImage').click(clickAddImage);
  }

  function clickAddImage(){

    var imageUrl =$('#inputURL').val();
    var newDiv = $('<div>');
    newDiv.css('background', 'url(' + imageUrl + ')');
    $('#container').append(newDiv);
  }







})();
