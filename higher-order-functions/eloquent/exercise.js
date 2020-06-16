// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

function flatArray(arrays){
  return arrays.reduce(function(accum, obj){
    return accum = accum.concat(obj);
  },[]);
}
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
for(let i = 3; i>0 ; i--){
  console.log(i);
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything 
function every(array, test) {
  let boolean = true;
  for(let i = 0; i< array.length ; i++){
    boolean = boolean && test(array[i])
  }
   return boolean;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
