import { add, evenOrOdd, isPrime, factorial, isStrong, isPalindrome } from './Indiviual Codes/moduleEO.js'


//addition arrow function
let result = add(10, 20);
console.log(result);

//Even or Odd Arrow Function
let eandO = evenOrOdd(5);
console.log(eandO);

//Prime Arrow Function
const newArray = [1, 3, 2, 5, 10];
const myPrimeArray = newArray.filter(isPrime);
console.log(myPrimeArray);

//factorial Arrow Function
const arr = [1, 2, 3, 4, 5];
const factorialArray = arr => arr.map(element => factorial(element));
console.log(factorialArray(arr));

//Strong number arrow function
const dataToCheckAndPrint = [1, 2, 145, 205, 255, 1000, 500, 26, 8, 999];
const strongNumbers = dataToCheckAndPrint.filter((element) =>
  isStrong(element));
console.log(strongNumbers);


//Palindrome Arrow Function
const arrayPalindrome = [313, 26, 272, 545, 39, 616, 868, 19, 12, 737];
const findPalindrome = arrayPalindrome => {
    return arrayPalindrome.filter(el => isPalindrome(el))};
console.log(findPalindrome(arrayPalindrome));