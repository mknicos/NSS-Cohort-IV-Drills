/*exported stndDev, square, variance, average*/

function square(x){
  'use strict';

  return x * x;
}

function average(array){
  'use strict';
  var total = _.reduce(array, function (num, sum){
    return num + sum;
  },0);
  total = total / array.length;
  return Math.round(total);
}

function variance(array){
  'use strict';
  var avg = average(array);
  var x = _.map(array, function(num){
    return square(num - avg);
  });
  var total = _.reduce(x, function(num, sum){
    return num + sum;
  });
  return total;
}

function stndDev(array){
  'use strict';
  return Math.round(Math.sqrt(variance(array)));
}
