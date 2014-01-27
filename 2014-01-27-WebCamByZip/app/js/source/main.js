(function(){

  'use strict';

  $(document).ready(init);



  function init(){
    $('#addZip').click(clickAddZip);
    $('#getCam').click(clickGetCam);

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
    var cam1 = data.webcams[0].camurl;
    var $div = $('<div>');
    $div = $div.addClass('box');
    $div.css('background-image', cam1);

  }















})();
