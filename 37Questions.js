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
  // console.log(1); 
  // setTimeout(function(){console.log(2)}, 1000); 
  // setTimeout(function(){console.log(3)}, 0); // This part can also be written as setImediate(function(){console.log(3)}) and you will get the same output.
  // console.log(4);
}()); //1 4 3 2  4 comes before 3 because setTimeout puts its callback function into an event queque 

//11. Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

function isPalindron(str) {
  let low = str.toLowerCase();
  let i = 0 
  let j = str.length - 1 
  while (i < j) {
    if(low[i]===low[j]) {i++; j--;} else {return false}
  }
  return true;
}

function isPalindrome2(str) {
  str = str.replace(/\W/g, '').toLowerCase(); //removes white space and punctuation.
  return (str == str.split('').reverse().join(''));
}

//12. Sum method that works for either of the following 

// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

function sum(x,y) {
  if (y) {
    return x+y;
  } else
  return function(z) {
   return x+z;
  }
}

// 13. what gets logged when you click Button 4?

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', function(){ console.log(i); });
//   document.body.appendChild(btn);
// }
//5 gets logged no matter what button is clicked. because the for loop has completed. If you use let instead of var this will be fixed
//or you can change the on click function to function(i){ return (function(){console.log(i)}(i)); }

// 14. What does the following code accomplish

let d = {};
[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
}); 

//it sets the properties zebra and horse onto the object d and explicitly sets them as undefined. 
//They would also be undefined if they don't exist but now Object.keys will contain them.

// 15. What is the output? 

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); // 5 and [j,o,n,e,s]
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); // 5 and [j,o,n,e,s]

//This happens because the reverse method actually reverses the array in place and then returns a reference to the reversed array instead of a new array.

//16. Output? 

// console.log(1 +  "2" + "2"); //"122"
// console.log(1 +  +"2" + "2"); // "32" order of operations converts +"2" to a possitive 2 first so 1+2= 3 + "2" = "32"
// console.log(1 +  -"1" + "2"); // "02" see above description
// console.log(+"1" +  "1" + "2"); //"112" first "1" is converted to a number but then back to a string on the second operation
// console.log( "A" - "B" + "2"); // "NaN2" - can't be don't to strings so you get NaN
// console.log( "A" - "B" + 2); // NaN same as above but since the 2 is a number NaN + a numer = NaN.

//17. How do you avoid stack overflow while keeping recursive functionality below on a large list. 

// var list = readHugeList();

// var nextListItem = function() {
//     var item = list.pop();

//     if (item) {
//         // process the list item...
//         nextListItem(); // change this to setTimeout(nextListItem(), 0); This takes it off the stack itself and is in the event queue
//     }
// };

//18. What is a closure? 

//A closure is a function defined inside another function, so that it has access to the variables in the function and globals and any defined within itself.
//You can use this to return a function from another function to wrap variables for a counter or something and not lose them once the function is invoked.

//19. 

// console.log("0 || 1 = "+(0 || 1)); // 1 first true value with or statement
// console.log("1 || 2 = "+(1 || 2)); // 1 first true value with or statement
// console.log("0 && 1 = "+(0 && 1)); // 0 first false value with and statement
// console.log("1 && 2 = "+(1 && 2)); // 2 last true value with and statement where all are true.

//20. Output 

// console.log(false == '0') // true
// console.log(false === '0') //false 

 // 21. Output?

 var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]); //456 JavaScript will stringify b and c when defining them as a key on a so both will be [Object object].
//so the code could alse be written like below, and thus both refer to the same thing. 

a['[Object object]']=123;
a['[Object object]']=456;

//21. output?

// console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10)); // 10 factorial 10!

//22. Output?

(function(x) {
  return (function(y) {
      console.log(x);
  })(2)
})(1); // Output is 1 because the inner function has access to the scope in the outer function where x is defined as 1

//23. Output?

var hero = {
  _name: 'John Doe',
  getSecretIdentity: function (){
      return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity;

// console.log(stoleSecretIdentity()); // undefined because when calling the method on stoleSecretIdentity this 
 //is the global object which doesn't have a _name property.
// console.log(hero.getSecretIdentity()); // 'John Doe' because this refers to the hero object where _name is defined.

//24. What is callback hell? 

  //It is where you have a bunch of nested callbacks that run one after the other 
  //because they rely on the previous function for a value. Async / Await is a great modern way to avoid callback hell.

  //25. Why does the following code take much longer to run in a Chrome browser than in Node.js
  //  {
  //   console.time("loop");
  //   for (var i = 0; i < 1000000; i += 1){
  //       // Do nothing
  //   }
  //   console.timeEnd("loop");
//}

// In the browser when i is defined as a global variable it is attached to the window global object which is a large object. 
// So every time it needs to update it has to manipulate a large object which takes longer than changing the small
// global scope in the Node.js environment. 

//26. What do the following lines output, and why?

// console.log(1 < 6 < 3); // true (1 < 6 < 3) ==> (true < 3 ) ==> (1 < 3) ==> true
// console.log(3 > 2 > 1); // false (3 > 2 > 1) ==> (true > 1) ==> (1 > 1) ==> false

//27.  How do you add an element to the beginning and end of array?

//End array.push(endElement);
//beginning array.unshift(startElement);
//both [startElement, ...array, endElement] spread operator can be used for for beginning or end too.

//28. Imagine you have this code:

// let  a = [1, 2, 3];
// a) Will this result in a crash?
// a[10] = 99;
//no it won't crash, but slots 3-9 will be empty slots.

// b) What will this output?
// console.log(a[6]);
//this will log undefined but the slot will be empty not specifically filled with undefined.

//29. What is the value of typeof undefined == typeof NULL?

//it evaluates to true because NULL being all uppercase means it is treated like any 
//other variable, and since it isn't defined it will have the type undefined
//where as null has the type object.
