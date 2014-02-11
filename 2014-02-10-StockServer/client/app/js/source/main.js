(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#getQuote').click(clickGetQuote);
    $('#getQuote2').click(clickGetQuote2);
  }

//This function uses the param method
  function clickGetQuote(){
    var symbol = $('#inputSym').val();
    var url = window.location.origin.replace(/\d{4}/g, 4000);
    url += '/quote/' + symbol + '?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#answer').text('The stock ' + symbol + ' has a current price of: $' + data.quote.price + ' per share');
    });
  }
//This function has the same result, but uses the query string method
  function clickGetQuote2(){
    var symbol = $('#inputSym2').val();
    var url = window.location.origin.replace(/\d{4}/g, 4000);
    url += '/quote?symbol=' + symbol + '&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#answer2').text('The stock ' + symbol + ' has a current price of: $' + data.quote.price + ' per share');
    });
  }
})();

