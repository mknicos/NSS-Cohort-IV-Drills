/*exported square, sumOfSquares*/

function square(x){
  'use strict';

  return x * x;
}

function sumOfSquares(array){
  'use strict';
  var x = _.reduce(array, function (num, sum){
    return num + square(sum);
  },0);
  return x;
}
