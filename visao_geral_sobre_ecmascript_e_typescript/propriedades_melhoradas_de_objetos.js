let [x, y] = ["a", "b"]; // equivalente a let x = 'a'; let y = 'b'

[x, y] = [y, x]; // equivalente a var temp = x; x = y; y = temp

console.log(x);
// b

console.log(y);
// a

let obj = { x, y };

console.log(obj); // equivalente a var x = 'b'; var y = 'a'; var obj = { x: x, y: y }
// { x: 'b', y: 'a' }

const hello = {
  name: "abcdef",
  printHello() {
    console.log("Hello");
  },
}; // equivalente a ... printHello: function printHello() {...}

hello.printHello();
// Hello
