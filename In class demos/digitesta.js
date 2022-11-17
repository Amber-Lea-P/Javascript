var number = 145;
var temp = number;
var digit = 0;
var factorial = 1;
var sum = 0;
while (number > 0) {
    // taking mod to get the last digit
  digit = number % 10;
  //calculating the factorial fo the digit
  for (var i = 1; i <= digit; i++) {
    factorial = factorial * i;
  }
  // printing the factorial
  console.log(factorial);
  // adding the factorial value to the sum later to check the number is strong or not.
  sum += factorial; // sum = sum + factorial
  // reseting the factorial to 1 to get a support to calculate the factorial of the next digit.

  factorial = 1;
  // dividing the number by 10 to remove the last digit and applying floor function to remove the fraction from it.
  
  number = Math.floor(number / 10);
}

console.log(number);
console.log(sum);

if (sum == temp) {
  console.log("number is strong");
} else {
  console.log("number is not strong");
}
