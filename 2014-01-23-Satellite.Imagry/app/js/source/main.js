/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#getImages').click(clickGetImages);
  }

  function clickGetImages(){
    var input = $('#zipInput').val();
    input = parseInt(input);
    var url = 'http://api.wunderground.com/api/44ef700b986d88f1/satellite/q/' + input + '.json?callback=?';
    $.getJSON(url, recieve);
    $('h2').text('Current Satellite Images of: ' + input);
  }

  function recieve(data){
    var image1 = data.satellite.image_url;
    var image2 = data.satellite.image_url_ir4;
    var image3 = data.satellite.image_url_vis;
    $('#img1').css('background-image', 'url(' + image1 + ')');
    $('#img2').css('background-image', 'url(' + image2 + ')');
    $('#img3').css('background-image', 'url(' + image3 + ')');
  }


})();
