var MyModule = require("./mymodule");
var dir = process.argv[2];
var ext = process.argv[3];
MyModule(dir, ext, (err, data) => {
  if (err) return console.log(err);
  data.map((el) => {
    console.log(el);
  });
});
