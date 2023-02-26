// 1. Compare Scopes of the var and let Keywords

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());


let printNumThree;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumThree = function() {
      return i;
    };
  }
}
console.log(printNumThree());
console.log(i);


function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}