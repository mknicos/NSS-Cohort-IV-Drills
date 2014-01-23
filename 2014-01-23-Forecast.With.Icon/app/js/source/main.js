/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#addZipCode').click(clickAddZip);
    $('#getForecast').click(clickGetForecast);
  }

  function clickAddZip(){
    var input = $('#zipInput').val();
    var $opt = $('<option>');
    $opt.val(input);
    $opt.text(input);
    $('#selector').append($opt);
    $('#zipInput').val('');
    $('#zipInput').focus();
  }

  function clickGetForecast(){
    var zipSelect = $('#selector').val();
    var url = 'http://api.wunderground.com/api/44ef700b986d88f1/forecast/q/' + zipSelect + '.json?callback=?';
    $.getJSON(url, recieve);
  }

  function recieve(data){
    var base = data.forecast.simpleforecast.forecastday;

    var thursIcon = base[0].icon_url;
    $('#thurs').css('background-image' , 'url('+thursIcon+')');
    $('#thurs h1').text('Thursday');
    var friIcon = base[1].icon_url;
    $('#fri').css('background-image' , 'url('+friIcon+')');
    $('#fri h1').text('Friday');
    var satIcon = base[2].icon_url;
    $('#sat').css('background-image' , 'url('+satIcon+')');
    $('#sat h1').text('Saturday');
    var sunIcon = base[3].icon_url;
    $('#sun').css('background-image' , 'url('+sunIcon+')');
    $('#sun h1').text('Sunday');

  }



})();
