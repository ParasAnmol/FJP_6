let fs = require('fs');
console.log(fs);
let path = require('path');

let fpath = path.join(__dirname,"file.txt");
console.log(fpath);
// Create file /
fs.writeFileSync(fpath, "You nailed it");
fs.writeFileSync(fpath, "You Nailed it long time ago");
// Read file 
let content =fs.readFileSync(fpath,'UTF-8');
console.log(content);
