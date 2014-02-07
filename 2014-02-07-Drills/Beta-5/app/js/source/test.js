/* global sumMultiple, startLastSix, sumFibNumbers, deepEqual,  test:false */

'use strict';

test('functions#startLastSix', function(){
  var a = [6,7,8,4,5];
  var b = [5,6,3,4,5];
  var c = [3,4,5,2,6];

  deepEqual(startLastSix(a), true, 'array starts with 6, should return true');
  deepEqual(startLastSix(b), false, 'should return false');
  deepEqual(startLastSix(c), true, 'array ends with 6, should return true');
});

test('functions#sumMultiple', function(){
  var a = sumMultiple();

  deepEqual(a, 233168, 'array starts with 6, should return true');
});

test('functions#fibNumbers', function(){
  var a = sumFibNumbers(10);

  deepEqual(a, 143, 'the sum of first 10 fib numbers is 134');
});
