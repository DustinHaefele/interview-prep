/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
234 => adg, aeh, afi, bdg, beh,
23 => ad, ae, af, bd, be, bf, ...
*/

//Input: "26"
//Output: "am" ... all possible combinations of letters for those numbers

//I can look at the first number, get the three letters that go with in
  //take each of those and look at the next number and add each letter for the second numebr onto each on the first and so on. 

// input: '2'
//output: ['a','b','c'];

//input: '23'
//

/* ad, ae,  af, bd, be, bf
    2: ['a','b','c'],
             ^
    3: ['d','e','f'],
                 ^
*/

//LETTER COMBINATIONS
function phone(numStr) {
  
  const obj = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z'],
  }
  
  //error case 
  if(numStr.length < 1){
    return [];
  }
  //BASECASE
  if(numStr.length === 1) {
    return obj[numStr]; //three letters from that number
  } else {
    let result = [];
    let first = obj[numStr[0]] //['a','b','c']
    //for each letter I want to add all possible combinations to it
    first.forEach(letter =>  { 
      let newString = numStr.slice(1);
      let array = phone(newString); //[d,e,f]
      array.forEach(item => result.push(letter + item));
    });
    return result;
  }
  
  
}
  
  console.log(phone('234'));