// read content of unorganised folder and make  an array which has extension name of each file
let fs = require('fs');
let path = require('path');
let fpath = path.join(__dirname,"..","unorganised");

let redaf = fs.readdirSync(fpath);
console.log(redaf);
console.log(redaf.length);
let extarr = [];
for(let i = 0; i <= redaf.length-1; i++){
    let ext = path.extname(redaf[i]);
    extarr.push(ext);
}
console.log(extarr);