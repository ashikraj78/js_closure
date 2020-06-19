// Challenge 1
function addTwo(num) {
    return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3)); // 5
console.log(addTwo(10)); // 12

// Challenge 2
function addS(word) {
    return word +"s";
}

// uncomment these to check your work
console.log(addS('pizza')); // pizzas
console.log(addS('bagel')); // bagels

// Challenge 3
function map(array, callback) {
    let array2 = [];
    for(let i = 0; i<array.length; i++){
      array2.push(callback(array[i]));
    }
    return array2
  }

console.log(map([1, 2, 3], x=>x+2)); // [3,4,5]

// Challenge 4
function forEach(array, callback) {
    for(let i = 0; i< array.length ; i++){
      callback(array[i]); 
    }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let arr2 = [];
    array.forEach(obj=> arr2.push(callback(obj)))
    return arr2;
}

//Extension 2
function reduce(array, callback, initialValue) {
    let accum = initialValue;
    for(let i = 0 ; i<array.length ; i++){
    var cb = callback(accum,array[i])
    }
    return accum;
}

//Extension 3
function intersection(arrays) {
    
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  var object = {};
  for(let i= 0 ; i< array1.length ; i++){
    if(callback(array1[i]) ===  array2[i]){
        object[array1[i]] = array2[i];
    }
  }
  return object;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  let obj = {};
  for(let i=0; i<arrVals.length; i++){
    obj[arrVals[i]] = arrCallbacks.map(x=> x(arrVals[i]))
  }
  return obj;

}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
