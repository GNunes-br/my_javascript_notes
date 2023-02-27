var framework = "Angular";
var framework = "React";
console.log(framework);
// React

let language = "JavaScript";
// let language = "Ruby"; [ERROR]: A variável chamada language já foi declarada
console.log(language);
// JavaScript

const PI = 3.141593;
// PI = 3.0; [ERROR]: A constante não pode ser alterada, apenas lida
console.log(PI);

// let PI [ERROR]
// var PI [ERROR]

const jsFramework = {
  name: "Angular",
};

jsFramework.name = "React";

/**
 * Os valores das propriedades de um objeto declarado como constante podem ser alterados,
 * mas a referência do objeto não. Exemplo:
 */

// jsFramework = {
//   name: "Vue",
// }; [ERROR]: A constante não pode ser alterada, apenas lida
