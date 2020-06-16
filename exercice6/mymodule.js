var fs = require("fs");
var path = require("path");
module.exports = function MyModule(dir, ext, callback) {
  ext = "." + ext;
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);
    let filtred = files.filter((el) => path.extname(el) === ext);
    return callback(null, filtred);
  });
};
