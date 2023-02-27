function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}

let params = [3, 4, 5];
console.log(sum(...params));
// 12

function restParamaterFunction(x, y, ...a) {
  return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, "hello", true, 7));
// 9

function restParamaterFunction2(x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}
console.log(restParamaterFunction2(1, 2, "hello", true, 7));
// 9
