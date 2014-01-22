/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#getWind').click(clickGetWind);
  }

  function clickGetWind(){
    var url ='http://api.wunderground.com/api/44ef700b986d88f1/conditions/q/TN/Nashville.json?callback=?';
    $.getJSON(url, request);
    
    function request(info){
      var desc = info.current_observation.wind_string;
      $('#windDesc').text('The Current wind is: ' + desc);

      var direction = info.current_observation.wind_dir;
      $('#direction').text('Its blowing from the :' + direction);

      var degrees = info.current_observation.wind_degrees;
      $('#degrees').text('From' + degrees);

      var speed = info.current_observation.wind_mph;
      $('#speedMPH').text('The wind is blowing at: ' + speed + 'mph');

      var gust = info.current_observation.wind_gust_mph;
      $('#gustMPH').text('With gust up to: ' + gust + 'mph');
    }
  }

})();
