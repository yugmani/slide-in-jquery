//Example 1

//Initializing some objects
const obj1 = [1, 2, 3];
const obj2 = ['a', 'b', 'c'];
const obj3 = [123];
const obj4 = [];

//Calling Symbol.hasInstance Property
console.log(Array[Symbol.hasInstance](obj1)); //Expected true
console.log(Array[Symbol.hasInstance](obj2)); //Expected true
console.log(Array[Symbol.hasInstance](obj3)); //Expected true
console.log(Array[Symbol.hasInstance](obj4)); //Expected true

//Example 2

//Calling a user define function
function gfg() {}

//Initializing the objects
const Script = new gfg();

//Calling the Symbol.hasInstance Property
console.log(gfg[Symbol.hasInstance](Script)); //Expected true
