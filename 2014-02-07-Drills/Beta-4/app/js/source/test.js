/* global isNearHundred, ok,  test:false */

'use strict';

test('functions#isNearHundred', function(){
  var a = 90;
  var b = 91;
  var c = 210;
  var d = 311;
  var e = 1202;

  ok(isNearHundred(a) === 'true', '90 is near a hundred');
  ok(isNearHundred(b) === 'false', '91 is not near a hundred');
  ok(isNearHundred(c) === 'true', '210 is near a hundred');
  ok(isNearHundred(d) === 'false', '311 is not near a hundred');
  ok(isNearHundred(e) === 'true', '1202 is near a hundred');
});

