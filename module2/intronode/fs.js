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
// update file content 
fs.appendFileSync(fpath, " New thing");
console.log(fs.readFileSync(fpath,'UTF-8'));
// delete
fs.unlinkSync(fpath);

// New folder making 
if(!fs.existsSync("NewDir")){
    fs.mkdirSync("NewDir")
}
//reada dir

console.log(fs.readdirSync("/home/wamir/FJP_6/module1"));
// remove dir 

fs.rmdirSync("NewDir");