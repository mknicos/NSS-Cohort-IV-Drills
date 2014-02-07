/* global replaceZero, mixArrays, sumPrimeFactors, sumMultiple, startLastSix, sumFibNumbers, deepEqual,  test:false */

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

test('functions#sumPrimeFactors', function(){
  var a = sumPrimeFactors();

  deepEqual(a, 55, 'sum of prime factors of num is 55');
});

test('functions#mixArrays', function(){
  var letters = ['A', 'B','C','D'];
  var numbers = [1, 2,3,4];
  var mixed = mixArrays(letters,numbers);

  deepEqual(mixed, ['A',1,'B',2,'C',3,'D',4], 'array should be mixed');
});

test('functions#replaceZero', function(){
  var a = [0,2,3,0,5,2,0,7,9];

  deepEqual(replaceZero(a), [3,2,3,5,5,2,9,7,9], 'sum of prime factors of num is 55');
});
