/**
 * == -> Podem ser considerado iguais mesmo se forem de tipos diferentes
 *
 *  |----------------|----------------|--------------------|
 *  |    Type (x)    |     Type(y)    |      Resultado     |
 *  |****************|****************|********************|
 *  |      null      |    undefined   | true               |
 *  |----------------|----------------|--------------------|
 *  |    undefined   |      null      | true               |
 *  |----------------|----------------|--------------------|
 *  |     Number     |      String    | x == toNumber(y)   |
 *  |----------------|----------------|--------------------|
 *  |     String     |      Number    | toNumber(x) == y   |
 *  |----------------|----------------|--------------------|
 *  |     Boolean    |       Any      | toNumber(x) == y   |
 *  |----------------|----------------|--------------------|
 *  |       Any      |     Boolean    | x == toNumber(y)   |
 *  |----------------|----------------|--------------------|
 *  |String ou Number|      Object    | x == toPrimitive(y)|
 *  |----------------|----------------|--------------------|
 *  |      Object    |String ou Number| toPrimitive(x) == y|
 *  |----------------|----------------|--------------------|
 */

/**
 * Método toNumber (interno)
 *
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *  |    Tipo do     |                                                                                                  |
 *  |     valor      |                                            Descrição                                             |
 *  |****************|**************************************************************************************************|
 *  |    undefined   | É NaN                                                                                            |
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *  |      null      | É +0                                                                                             |
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *  |     Boolean    | Se o valor for true, o resultado será 1; se o valor for false, o resultado será +0               |
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *  |     Number     | É o valor do número                                                                              |
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *
 */

console.log("Number(undefined)", Number(undefined));
// NaN

console.log("Number(null)", Number(null));
// 0

console.log("Number(true)", Number(true));
// 1

console.log("Number(false)", Number(false));
// 0

console.log("Number(5)", Number(5));
// 5

/**
 * Método toPrimitive (interno)
 *
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *  |    Tipo do     |                                                                                                  |
 *  |     valor      |                                            Descrição                                             |
 *  |****************|**************************************************************************************************|
 *  |     Object     | Se valueOf devolver um valor primitivo, esse valor primitivo será devolvido; caso contrário, se  |
 *  |                | toString devolver um valor primitivo, esse valor será devolvido; senão, um erro será devolvido   |
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *  |      null      | É +0                                                                                             |
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *  |     Boolean    | Se o valor for true, o resultado será 1; se o valor for false, o resultado será +0               |
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *  |     Number     | É o valor do número                                                                              |
 *  |----------------|--------------------------------------------------------------------------------------------------|
 *
 */

var obj = {
  name: "John",
};

console.log("obj.valueOf() : ", obj.valueOf());
// obj.valueOf() : { name: 'John' }

console.log("obj.toString() : ", obj.toString());
// obj.toString() : [object Object]

console.log("packt ? true : false : ", "packt" ? true : false);
// packt ? true : false : true

/**
 * packt == 1 -> true foi convertido para número (toNumber)
 * NaN == 1   -> string foi convertido para número (toNumber)
 * NaN == 1 = false
 */
console.log("packt == true : ", "packt" == true);
// packt == true : false

/**
 * packt == 0 -> false foi convertido para número (toNumber)
 * NaN == 0   -> string foi convertido para número (toNumber)
 * NaN == 0 = false
 */
console.log("packt == false : ", "packt" == false);
// packt == false : false

/**
 * === -> O resultado é false se o tipo for difetente; se forem do mesmo tipo, será levado em consideração a tabela abaixo.
 *
 *  |----------------|-------------------------------------------|--------------------|
 *  |    Type (x)    |                  Valores                  |      Resultado     |
 *  |****************|*******************************************|********************|
 *  |     Number     | x tem o mesmo valor que y (mas não é NaN) |        true        |
 *  |----------------|-------------------------------------------|--------------------|
 *  |     String     | x e y têm caracteres idênticos            |        true        |
 *  |----------------|-------------------------------------------|--------------------|
 *  |     Boolean    | x e y são ambos true ou são ambos false   |        true        |
 *  |----------------|-------------------------------------------|--------------------|
 *  |     Object     | x e y referenciam o mesmo objeto          |        true        |
 *  |----------------|-------------------------------------------|--------------------|
 */

console.log("packt === true : ", "packt" === true);
// packt === true : false

console.log("packt === packt : ", "packt" === "packt");
// packt === packt : true

var person1 = { name: "John" };

var person2 = { name: "John" };

console.log("person1 === person2 : ", person1 === person2); // Objetos diferente
// person1 === person2 : false

console.log("person1.name === person2.name : ", person1.name === person2.name); // Propriedades do mesmo tipo e valor
// person1.name === person2.name : true

var person3 = person1;

console.log("person1 === person3 : ", person1 === person3); // Ambos fazer referência para o mesmo objeto
// person1 === person2 : true
