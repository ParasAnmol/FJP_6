// empty Array 

let arr = [];
console.log(arr);

// array with elements 

let elarr = [5 , 6 , 7 , 'hello string', false , 'a'];
console.log(elarr);
console.log(elarr[3]);

// replace a element in array 

elarr[5] = 'make js on finger tips';
console.log(elarr[5]);

// Array method 
// 1. Push  - with push we can add a new element in end of array

console.log("array before push : " + elarr );
elarr.push("new element");
console.log("array after push : " + elarr );
