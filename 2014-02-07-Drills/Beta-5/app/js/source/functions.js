/*exported sumMultiple, sumFibNumbers, startLastSix*/

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
  debugger;
  var array = [1,1];
  var sum = 0;
  for(var i = 2; i < num; i++){
    sum = array[array.length -2] + array[array.length -1];
    array.push(sum);
  }
  var total = _.reduce(array, function(sum,num){
    debugger;
    return sum + num;
  });
  return total;
}
