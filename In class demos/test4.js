// find out the factorial of a number

// 5! : 5 * 4 * 3 * 2 * 1 or 1 * 2 * 3 * 4 * 5
//5! : 20 * 3 * 2 * 1
// 120

var result = 1;
for (var i = 1; i <=5; i++) {
    if (i == 0 || i == 1) {
        console.log(result);
    }
    result = result * i;
}
console.log(result);

// strong number :
// 145: 1! + 5! + 4!
//    : 1  + 120 + 4
// 145 
// if the sum of the factorial = original number then that number is called a strong number
