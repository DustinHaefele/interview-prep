// Write a function that takes two strings s and p and returns a boolean if they are a match.

// p is a pattern where any character 'a-z' has to be a direct match.
// if there is a '.' it can match any character.
// if there is a '*' the previous character can be matched 0-inf times.

// so s =  'aab' p ='ab' // false
// s='aab' p = 'a.b' // true
// s = aaaaab p = a*b // true

//Input: s - String p - Pattern
//Output: boolean that says whether the string matches the pattern
//edge cases: zero occurances of the starred character

//I need to loop through the string and set up conditionals as to whether
//each character matches the pattern

function isMatch(s, p){
  if (!p.includes('*') && !p.includes('.')) {
    if (p === s) return true;
    else return false;
  } else if(!p.includes('*') && p.length === s.length) {
    for(let i = 0; i < s.length; i++) {
      if (p[i] !== '.' && p[i] !== s[i]) return false;
    }
    return true;
  } else if (p.length !== s.length) return false;
  return 'I have not checked for this condition';
  }

//simple case pattern is all 'a-z' characters. It is just a direct match.

//next simplest case is that it has a '.' but no star.
  //in this case I will have to iterate through both strings and check if each character matches
  //or if it is a  '.' on the pattern

// difficult case: where the condition contains a *.
  // if I split the string on star I won't have to check if it is included each time.
  //pArr = p.split('*') if (pArr.length === 1) { do the two conditionals above } 
  //else {look through each value in the array and whe you come to the final index in the string
//}

for(let i = 0; i < pArr.length; i++) {
  for(let j = 0; j < pArr[i].length; j++){
    if(j === pArr[i].length - 1) {
      while(pArr[i][j] === s[k]){
        k++;
      }
    }
  }
}



  console.log(isMatch('ab', 'ab')); //true




