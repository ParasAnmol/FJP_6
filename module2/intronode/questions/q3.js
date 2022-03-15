//copy index.html file from module1 to a new folder inside module2 having name html.
let fs = require('fs');

let path = require('path');
if(!fs.existsSync("/home/wamir/FJP_6/module2/html")){
    fs.mkdirSync("/home/wamir/FJP_6/module2/html");
}
let spath = "/home/wamir/FJP_6/module1/minor project/index.html";
let dpath = "/home/wamir/FJP_6/module2/html/index.html";
fs.copyFileSync(spath,dpath);