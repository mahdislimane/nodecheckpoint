var fs = require("fs");
var buf = new Buffer.alloc(1024);
fs.readFile(process.argv[2], "utf8", function (err, data) {
  if (err) {
    console.log(err);
  }
  var num = data.toString().split("\n").length - 1;
  console.log(num);
});
