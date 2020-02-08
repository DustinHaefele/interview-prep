function palindrone(string) {
  let start = 0;
  let end = string.length - 1;
  while (start < end) {
    if (string[start] !== string[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

function palindrone2(string) {
  let copy = string
    .split('')
    .reverse()
    .join('');
  if (copy === string) {
    return true;
  }
  return false;
}

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
  return;
}

function anagram(s1, s2) {
  let first = s1
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, '')
    .split('')
    .sort()
    .join('');
  let second = s2
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, '')
    .split('')
    .sort()
    .join('');

  if (first === second) {
    return true;
  }

  return false;
}

//return nth number in fibonacci sequence
  //fibinocci sequence = each number is the sum of the previous two numbers
function fib(n) {
  if (n < 1) {
    return 0;
  } else if(n === 1){
    return 1
  } else {
    return fib(n-1) + fib (n-2);
  }

}

console.log(fib(6));
