var sum = process.argv;
sum.splice(0, 2);
var x = 0;
sum.map((el) => {
  x = x + parseInt(el);
});
console.log(x);
