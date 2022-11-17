// palindrom number : original number and reversal number should be the same
// 1. we have to form the reversal number.
// do we need to separate the  digits and form the number
//can we take a mod?
// digit to form the number.
//then compare the original number with the reversal number.

var number = 12345;
var digit = 0;
var counter = 0;
var reversal = 0;
while (number > 0) { //can not be 1 because 1 is a palindrom number of 1
    // do we need to seperate teh digits from the number a
    digit = number % 10;
    console.log(digit);
    number = Math.floor(number / 10);
            //Math.floor(1234.5) //Math.flor(123.4) Math.floor(12.3) Math.floor(1.2) (Example when the var number is 12345)
    //console.log(number);
}