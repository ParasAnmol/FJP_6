const fs = require('fs');

console.log('before');

let promisefile = fs.promises.readFile('f1.txt');

promisefile.then(function(data){
    console.log(data + "");
});

promisefile.catch(function(error){
    console.log(error);
});
console.log('after');