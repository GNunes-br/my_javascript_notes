let movie = "Lord of Rings"; // [GLOBAL]
// var movie = "Batman v Superman"; [ERROR]: A variável chamada movie já foi declarada
function starWarsFan() {
  const movie = "Star Wars"; // [LOCAL]
  return movie;
}
function marvelFan() {
  movie = "The Avengers"; // [REF.: linha 1]
  return movie;
}
function blizzardFan() {
  const isFan = true;
  let phrase = "Warcraft"; // [LOCAL]
  console.log("Before if:", phrase);
  if (isFan) {
    let phrase = "initial text"; // [LOCAL]
    phrase = "For the Horde!"; // [REF.: linha 16]
    console.log("Inside if:", phrase);
  }
  phrase = "For the Alliance!"; // [REF.: linha 13]
  console.log("After if:", phrase);
}

console.log(movie);
// Lord of Rings

console.log(starWarsFan());
// Star Wars

console.log(marvelFan());
// The Avengers

console.log(movie);
// The Avengers

blizzardFan();
// Before if: Warcraft
// Inside if: For the Horde
// After if: For the Alliance!
