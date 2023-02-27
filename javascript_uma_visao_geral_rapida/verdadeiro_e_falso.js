/**
 * Operadores de atribuição
 *
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *  |    Tipo do     |                                                                                                  |
 *  |     valor      |                                            Descrição                                             |
 *  |****************|**************************************************************************************************|
 *  |    undefined   | false                                                                                            |
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *  |      null      | false                                                                                            |
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *  |     Boolean    | Verdadeiro é true e falso é false                                                                |
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *  |     Number     | O resultado é false para +0, -0 ou NaN; caso contrário, true                                     |
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *  |     String     | O resultado é false se a string for vazia (o tamanho é 0); caso contrário, é true (tamanho >= 1) |
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *  |     Object     | true                                                                                             |
 *  |----------------|--------------------------------------------------------------------------------------------------|
 */

function testTruthy(val) {
  return val ? console.log("truthy") : console.log("falsy");
}

testTruthy(true);
// truthy

testTruthy(false);
// falsy

testTruthy(new Boolean(false)); // Objeto sempre é true
// truthy

testTruthy("");
// falsy

testTruthy("Packt");
// truthy

testTruthy(new String("")); // Objeto sempre é true
// truthy

testTruthy(1);
// truthy

testTruthy(-1);
// truthy

testTruthy(NaN);
// falsy

testTruthy(new Number(NaN)); // Objeto sempre é true
// truthy

testTruthy({});
// truthy

var obj = { name: "John" };

testTruthy(obj); // Objeto sempre é true
// truthy

testTruthy(obj.name);
// truthy

testTruthy(obj.age); // Propriedade não existe
// falsy
