'use strict';

var Stock = require('../lib/stock');

exports.returnPrice = function(req, res){
  var quote = new Stock(req.params.sym);
  res.jsonp({quote: quote});
};

exports.returnPrice2 = function(req, res){
  var quote = new Stock(req.query.symbol);
  res.jsonp({quote: quote});
};
