var fs = require("fs");
fs.readdir(process.argv[2], function (err, files) {
  if (err) {
    console.log(err);
  }
  var list = files.filter((el) =>
    el.toLowerCase().includes(`.${process.argv[3].toLowerCase()}`)
  );
  list.map((el) => {
    console.log(el);
  });
});
