'use strict';

var Stock = require('../lib/stock');

exports.returnPrice = function(req, res){
  var quote = new Stock(req.params.sym);
  res.jsonp({quote: quote});
};
