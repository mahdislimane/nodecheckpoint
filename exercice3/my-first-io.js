var fs = require("fs");
var buf = new Buffer.alloc(1024);
var data = fs.readFileSync(process.argv[2]);
var num = data.toString().split("\n").length - 1;
console.log(num);
