// Loop type above
/*const isPalindrome = (string) => {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      reversedString += string[i];
    }
    return string === reversedString;
  }
  

   // Recursive
  const isPalindrome = (input) => {
    // Define the base-case / stopping codition
    if (input.length === 0 || input.length === 1) return true;
    //Do some work to shrink the problem space
    if (input.charAt(0) === input.charAt(input.length - 1))
      return isPalindrome(input.substring(1, input.length - 1));
    // additional base-case to handle non-palindromes
    return false;
  }
  
  console.log(isPalindrome("racecar"));*/


  /**
 * Write a function to determine if the supplied string is a palindrome
 * Eg:  radar,  racecar, kayak, and redder are all palidromes
 * They are the spelled same backwards and forwards
 */

let palindrome = function (word) {
  let len = word.length;
  let start = word.substring(0, Math.floor(len/2) ).toLowerCase();
  let end = word.substring(len - Math.floor(len/2)).toLowerCase();
  //console.log(start, end);
  let flip = end.split('').reverse().join('');
  return(start === flip);
}

console.log(palindrome('radar')); //true
console.log(palindrome('redder')); //true
console.log(palindrome('window')); //false


function PalindromeEx(num) { 
      
  let numToStringArray = num.toString().split('');
  let reversedArray = num.toString().split('').reverse();

console.log("here", numToStringArray, reversedArray)
  if (num.toString().length<2) {
     return "It's a palindrome"
  }
  else { 
        for (let i = 0; i<numToStringArray.length; i++) {    
           if (numToStringArray[i] !== reversedArray[i]) {
             return "It's not a palindrome"
             }
            else {
                 return "It's a palindrome"
                 }
             }
        } 
}

console.log(PalindromeEx(313))
