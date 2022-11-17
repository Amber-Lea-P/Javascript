// delcare an array with 10 numbers and find out palindrome numbers in the array.

const arrayPalindrome = [313, 26, 272, 545, 39, 616, 868, 19, 12, 737];
const isPalindrome = el => {
    const str = String(el);
    let i = 0;
    let j = str.length - 1;
    while(i < j) {
       if(str[i] === str[j]) {
          i++;
          j--;
       }
       else {
          return false;
       }
    }
    return true;
 };
 const findPalindrome = arrayPalindrome => {
    return arrayPalindrome.filter(el => isPalindrome(el));
 };
 console.log(findPalindrome(arrayPalindrome));

 //try to optimize the solution try to reduce the number of lines 