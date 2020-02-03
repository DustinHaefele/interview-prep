let c = 1;
let b;
b = 3;


console.log(a);
var a = 3;
hoisted(b);

function hoisted(x) {
  console.log(x);
}

c = 2;


// function hoist() {
//   a = 20;
//   let d = 100;
// }

// hoist();

// console.log(a); 
// /* 
// Accessible as a global variable outside hoist() function
// Output: 20
// */

// console.log(d); 
// /*
// Since it was declared, it is confined to the hoist() function scope.
// We can't print it out outside the confines of the hoist() function.
// Output: ReferenceError: b is not defined
// */

