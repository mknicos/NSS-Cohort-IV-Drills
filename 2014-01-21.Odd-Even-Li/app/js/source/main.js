(function(){
  
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#button').click(addUL);

  }

  function addUL(){
    var max = $('#inputBox').val() * 1;
    for(var i = 1; i <= max; i++){
      var x = $('<li>').val(i);
      $('#mainUL').append(x);
      if(i % 2 === 0){
        x.css('color','red');
      }
    }
  }
})();
