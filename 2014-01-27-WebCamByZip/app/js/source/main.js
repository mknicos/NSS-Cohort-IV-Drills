(function(){

  'use strict';

  $(document).ready(init);



  function init(){
    $('#addZip').click(clickAddZip);
    $('#getCam').click(clickGetCam);
    $('#clear').click(clickClear);

  }

  function clickAddZip(){
    var zipCode = $('#inputZip').val();
    var $opt = $('<option>');
    $opt.text(zipCode);
    $('#selector').append($opt);
  }

  function clickGetCam(){
    var zipCode = $('#selector').val();
    var url = 'http://api.wunderground.com/api/44ef700b986d88f1/webcams/q/'+zipCode+'.json?callback=?';
    $.getJSON(url, recieve);
  }


  function recieve(data){
    for(var i = 0; i < data.webcams.length; i++){
      var cam = data.webcams[i].WIDGETCURRENTIMAGEURL;
      var spot = data.webcams[i].neighborhood;
      var $div = $('<div>');
      $div = $div.addClass('box');
      $div.css('background-image', 'url('+cam+')');
      $div.text(spot);
      $('#container').append($div);
    }
  }

  function clickClear(){
    $('#container').empty();
  }


})();
