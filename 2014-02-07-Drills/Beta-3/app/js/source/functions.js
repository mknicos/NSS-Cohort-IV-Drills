/*exported calcInterest*/

function calcInterest(p,r,t){
  'use strict';
  return (p * ((r * -100)*-1) * (t/365));
}

