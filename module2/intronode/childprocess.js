let cp = require('child_process');

cp.execSync("mate-calculator");
let content = cp.execSync("node test.js");
console.log("" +content);