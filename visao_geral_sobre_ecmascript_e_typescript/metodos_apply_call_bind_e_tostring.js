// function hello() {
//   console.log(this);
//   console.log(arguments);
// }

const hello = new Function(`
   console.log(this);
   console.log(arguments);
`);

/**
 * O método apply() chama uma função com um dado valor this e arguments providos como uma array (ou um objeto parecido com um array).
 */
hello.apply(this, ["es5", "arrays", "to", "params", "test"]);
/**
   * {}
      [Arguments] {
      '0': 'es5',
      '1': 'arrays',
      '2': 'to',
      '3': 'params',
      '4': 'test'
      }
   */

/**
 * O método call() invoca uma função com um dado valor this e argumentos passados individualmente.
 */
hello.call(this, "ES5");
/**
   * {}
      [Arguments] { '0': 'ES5' }
   */

const obj = {
  name: "John",
};

hello.call(obj, "ES5");
/**
   * { name: 'John' }
      [Arguments] { '0': 'ES5' }
   */

/**
 * O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido,
 * com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
 */
const newFunction = hello.bind(obj, [
  "es5",
  "arrays",
  "to",
  "params",
  "test",
])();

newFunction;
/**
   * { name: 'John' }
      [Arguments] { '0': [ 'es5', 'arrays', 'to', 'params', 'test' ] }
   */

console.log(hello.toString());
/**
   * function anonymous(
      ) {
         console.log(this);
         console.log(arguments);
      }
   */
