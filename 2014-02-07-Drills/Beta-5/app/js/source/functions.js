/*exported replaceZero, mixArrays, testPrime, sumPrimeFactors, sumMultiple, sumFibNumbers, startLastSix*/

function startLastSix(array){
  'use strict';
  debugger;

  if(_.lastIndexOf(array, 6) === (array.length - 1)){
    return true;
  }else if (_.first(array) === 6){
    return true;
  }
  else{
    return false;
  }

}

function sumMultiple(){
  'use strict';
  var total = 0;
  for(var i = 0; i < 1000; i++){
    if(i % 3 === 0 || i % 5 === 0){
      total += i;
    }
  }
  return total;
}

function sumFibNumbers(num){
  'use strict';
  var array = [1,1];
  var sum = 0;
  for(var i = 2; i < num; i++){
    sum = array[array.length -2] + array[array.length -1];
    array.push(sum);
  }
  var total = _.reduce(array, function(sum,num){
    return sum + num;
  });
  return total;
}

function sumPrimeFactors(){
  'use strict';

  var factors = [];
  for(var i = 0; i < 13195; i++){
    if(13195 % i === 0){
      factors.push(i);
    }
  }
  
}

function testPrime(num){
  'use strict';

  for(var i=2; i < num; i++){
    if(num % i ===0){
      return false;
    }
  }
  return true;
}

function mixArrays(a,b){
  'use strict';
  var newArray = [];
  for(var i = 0; i < a.length; i++){
    newArray.push(a[i]);
    newArray.push(b[i]);
  }
  return newArray;
}


function replaceZero(array){
  'use strict';
  var r = 0;
  var index = array.length-1;
  var newArray = _.forEachRight(array, function(num){
      if(num === 0){
        array[index] = r;
        r = 0;
      }else if(num % 2 !==0 && num > r){
        r = num;
      }
      index--;
    });
  return newArray;
}
