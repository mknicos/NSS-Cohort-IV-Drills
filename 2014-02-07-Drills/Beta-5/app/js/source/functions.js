/*exported sumMultiple, startLastSix*/

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

