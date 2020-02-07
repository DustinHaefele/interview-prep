/*
Write a function that takes two strings, s1, and s2 and returns the longest common subsequence of s1 and s2

"ABAZDC", "BACBAD" => "ABAD"
"AGGTAB", "GXTXAYB" => "GTAB"
"aa", "aaaa" => "aa"
*/

//Input: "abdcg", 'agbdxg'
//Output: 'abdg'

//I can do it with nested loops
//look at the first letter of the first string
//then I loop through the second string until I find that character
//then I move to the next character in the first string if I find it later in the second string I move to the next
//if I find it before the character before then I ignore the first find and move to the next

function findLongestSub(s1, s2) {

  let longestSub = ''
  let currentSubString = '';
  let startingJ = 0;

  for (let startingI = 0; startingI < s1.length; startingI++) {
   let string = s1.slice(startingI);

    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      for (let j = 0; j < s2.length; j++) {
        if (s2[j] === string[i]) {
          currentSubString += char;
          startingJ = j + 1;
          break;
        } else if (s2[j] === string[i + 1]) {
          break;
        }
      }
      if (currentSubString.length > longestSub.length) {
        longestSub = currentSubString; 
      }
    
    currentSubString = '';
    startingJ = 0;}
  }
  return longestSub;
}

console.log(findLongestSub('AGGTAB', 'GXTXAYB'));
console.log(findLongestSub('ABAC', 'AACBAC'));
console.log(findLongestSub('', 'nthaoeu'));
console.log(findLongestSub('aa','aaaa'));
