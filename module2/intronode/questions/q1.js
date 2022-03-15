//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made
let fs = require('fs');

let path = require('path');
if(!fs.existsSync("qone")){
    fs.mkdirSync("qone")
}
let fpath= path.join(__dirname,"qone","q1.txt");
fs.writeFileSync(fpath,"You gonna nail it");
