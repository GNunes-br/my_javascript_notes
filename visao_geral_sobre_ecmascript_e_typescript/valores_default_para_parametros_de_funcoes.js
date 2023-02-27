function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}

console.log(sum(4, 2)); // Não estamos passando o 'z', então seu valor será o default
// 9

function output() {
  console.log(arguments); // As funções possuem um objeto embutido, chamado 'arguments'. Ele é um array de argumentos usados quando a função é chamada
}

output();
// {}

output("Hello", "World");
// { '0': 'Hello', '1': 'World' }
