(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#addOption').click(addToList);
  }

  function addToList(){
    var i = $('option').length;
    var input = $('#colorInput').val();
    var $opt = $('<option>').text(input).val(i);
    $('#selector').append($opt);
    $('#colorInput').val('');
    $('#colorInput').focus();
  }

})();
