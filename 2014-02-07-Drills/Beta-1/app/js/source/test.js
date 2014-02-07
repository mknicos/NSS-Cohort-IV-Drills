/* global square, sumOfSquares, deepEqual, test:false */

'use strict';

test('functions#square', function(){
  var x = square(4);
  var y = square(-3);

  deepEqual(x, 16, 'x should be 16');
  deepEqual(y, 9, 'y should be 9');
});

test('functions#sumOfSquares', function(){
  var x = sumOfSquares([2,3,4,5]);
  var y = sumOfSquares([4,2,2]);

  deepEqual(x, 54, 'x should be 54');
  deepEqual(y, 24, 'y should be 24');
});
