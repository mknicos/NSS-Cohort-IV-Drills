(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#getQuote').click(clickGetQuote);
  }

  function clickGetQuote(){
    var symbol = $('#inputSym').val();
    var url = window.location.origin.replace(/\d{4}/g, 4000);
    url += '/quote/' + symbol + '?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#answer').text('The stock ' + symbol + ' has a current price of: $' + data.quote.price + ' per share');
    });
  }

})();

