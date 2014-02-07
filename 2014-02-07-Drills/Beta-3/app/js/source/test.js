/* global deepEqual, calcInterest, test:false */

'use strict';

test('functions#caclInterest', function(){
  var x = calcInterest(890, 12.5, 261);

  deepEqual(x, 79.55, 'x should be 79.55');
});

