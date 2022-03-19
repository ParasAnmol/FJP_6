//move a file
let fs = require('fs');
let path = require('path');

let source = path.join(__dirname,"abc.txt");
console.log(source);
let destin = path.join(__dirname,"..","unorganised","abc.txt");
console.log(destin);

fs.copyFileSync(source,destin);

fs.unlinkSync(source);