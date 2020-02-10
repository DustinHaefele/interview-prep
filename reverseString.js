//reverse array in place. write a function that takes in an array and reverses it 
//without creating another array. You may be asked to do this with a string but 
//strings are immutable in JS

//input: array 
//output: array
//example: 'hello' => 'olleh'

//swap first and last letters, then move in towards the center one spot and swap those etc.

//walkthrough: 'olleh'

function swap(start,end, array) {
  let temp = array[start]
  array[start] = array[end];
  array[end] = temp;
  return array;
}

function revInPlace(arr) {
  let start = 0; 
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

let testarr = ['b','y','e'];


//console.log(revInPlace('hello'));
console.log(revInPlace(testarr));
console.log(testarr);