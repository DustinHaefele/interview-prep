//1. What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? 
//How can this pitfall be avoided?

// console.log(typeof [] === 'object') //true
// console.log(typeof {} === 'object') //true
// console.log(typeof null === 'object') //true

//This is the problem with checking typeof === 'object'

//solution 

let bar = null;
let foo = []
let obj = {}

// console.log(bar !== null && (typeof bar === 'object') && !Array.isArray(bar)) //false
// console.log(foo !== null && (typeof foo === 'object') && !Array.isArray(foo)) //false
// console.log(obj !== null && (typeof obj === 'object') && !Array.isArray(obj)) //true

//2. What is the output?


function hey() {
  var a = b = 3;
};

hey();

// console.log("a defined? " + (typeof a !== 'undefined')); // a isn't defined in global scope
// console.log("b defined? " + (typeof b !== 'undefined')); // b is defined in global scope 

//This is because in the function it is 
// b = 3 - since this isn't preceded by a var let or const it moves to global.
// var a = b 

//3. What is the output

var myObject = {
  foo: "bar",
  func: function() {
      var self = this;
      console.log("outer func:  this.foo = " + this.foo); //bar
      console.log("outer func:  self.foo = " + self.foo); // bar
      (function() {
          console.log("inner func:  this.foo = " + this.foo); //undefined this is refering to the inner function and foo isn't defined there
          console.log("inner func:  self.foo = " + self.foo); //bar self is a variable on the parent so it will look there and find foo defined.
      }());
  }
};
// myObject.func();

//4. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?

//This creates a Closure and it's own namespace so that variables won't conflict with other modules that you are importing. 

//5. What is 'use strict' 

// By adding it you are voluntarily adding stricter parsing and error handling rules. Errors that may have been ignored will now throw errors.
//It makes debugging easiel, prevents accidental global variables, as well as other possitives.

// 6. Do both of these functions produce the same thing?

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return //;
  {
      bar: "hello"
  };
} // this is undefined because JavaScript automattically puts a ; above where it is commented in.

// 7. What is NaN? What is it's type? How to test if something is NaN?

//Not a Number. It's type is number and you can use Number.isNaN() function to test for it.

// 8. Output?

// console.log(0.1 + 0.2); //0.30000000000000004
// console.log(0.1 + 0.2 == 0.3); //false

//need to implement a function to see if they are almost the same to evaluate float equality.

function almostEqual(num1, num2){
  return Math.abs(num1-num2) < Number.EPSILON; //EPSILON is a super small number.
}

//console.log(almostEqual(0.1+0.2,0.3));

// 9. Discuss how to write a function isInteger(x) to see if x is an integer?

function isInteger(x) {
  return (x % 1 == 0 && typeof x ==='number');
  //now you can use Number.isInterger(x); ES6;
}

// console.log(isInteger(5));
// console.log(isInteger(2.00001));
// console.log(isInteger('hello'));
// console.log(isInteger(null));

//10. What order do these print? 

(function() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
}()); //1 4 3 2  4 comes before 3 because setTimeout puts its callback function into an event queque 

