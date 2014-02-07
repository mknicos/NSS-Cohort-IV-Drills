/*exported isNearHundred*/

function isNearHundred(num){
  'use strict';
  if(Math.abs(num - 100) <= 10){
    return 'true';
  }else{
    return 'false';
  }

}

