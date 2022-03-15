// /home/wamir/FJP_6/module2/intronode/path.js

let path = require('path');
console.log(path);

let ext = path.extname("/home/wamir/FJP_6/module2/intronode/path.js");
console.log(ext);
let base = path.basename("/home/wamir/FJP_6/module2/intronode/path.js");
console.log(base);

console.log(__dirname);

console.log(__filename);