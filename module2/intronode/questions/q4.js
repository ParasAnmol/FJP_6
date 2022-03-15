// read content of unorganised folder and make  an array which has extension name of each file
let fs = require('fs');
let path = require('path');

console.log(fs.readdirSync("/home/wamir/FJP_6/module2/intronode/unorganised"));