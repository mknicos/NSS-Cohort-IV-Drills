/* global square, variance, stndDev, average, deepEqual, test:false */

'use strict';

test('functions#square', function(){
  var x = square(4);
  var y = square(-3);

  deepEqual(x, 16, 'x should be 16');
  deepEqual(y, 9, 'y should be 9');
});

test('functions#average', function(){
  var x = average([2,2,4,4]);
  var y = average([4,2,3,7]);

  deepEqual(x, 3, 'x should be 3');
  deepEqual(y, 4, 'y should be 4');
});

test('functions#variance', function(){
  var x = variance([2,2,4,4]);
  var y = variance([4,2,3,7]);

  deepEqual(x, 4, 'x should be 4');
  deepEqual(y, 14, 'y should be 14');
});

test('functions#stndDev', function(){
  var x = stndDev([2,2,4,4]);
  var y = stndDev([4,2,3,7]);

  deepEqual(x, 2, 'x should be 2');
  deepEqual(y, 4, 'y should be 4');
});
