(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#addZip').click(clickAddZip);
    $('#getForecast').click(clickGetForecast);
  }

  function clickAddZip(){
    var input = $('#inputZip').val();
    var $option = $('<option>');
    $option.val(input);
    $option.text(input);
    $('#selector').append($option);
  }

  function clickGetForecast(){
    var zipCode = $('#selector').val();
    var url = 'http://api.wunderground.com/api/44ef700b986d88f1/forecast/q/' + zipCode +'.json?callback=?';
    $.getJSON(url, request);
  }    

  function request(data){
    console.log(data);
  }
  


})();
