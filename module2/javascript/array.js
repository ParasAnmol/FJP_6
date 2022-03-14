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

// 2. Pop -- pop is used to remove a elemnt from end of the array 

console.log("array before pop : " + elarr );
elarr.pop();
console.log("array after pop : " + elarr );

// 3. Shift -- shift always remove the first Elementof Array 

console.log("array before shift : " + elarr );
elarr.shift();
console.log("array after shift : " + elarr );

// 4. Unshift -- unshift is used to add the new elment in the start of a Array 

console.log("array before unshift : " + elarr );
elarr.unshift("new element");
console.log("array after unshift : " + elarr );

// length

let len = elarr.length;
console.log(len);