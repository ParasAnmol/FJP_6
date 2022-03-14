let str = "You make js on your fingertips ";
console.log(str);

// length of string 

let len = str.length;
console.log(len);

// Slice method is used to use a specifc part of string specify by you 

let sli = str.slice(2,10);
console.log(sli);
 
// replace method -- is used to replace a part of string with aprameter given by u 

let repl = str.replace("fingertips","brain ");
console.log(repl);
 
// uppercase lowercase 

let upper = str.toUpperCase();
console.log(upper);

let lower = str.toLowerCase();
console.log(lower);

// concatinate 

let con = upper.concat(lower);
console.log(con);

let fullname = upper  + lower ;
console.log(fullname);

// Split break the string at the basis of the spaces in string 

let spl = str.split(" ");
console.log(spl);