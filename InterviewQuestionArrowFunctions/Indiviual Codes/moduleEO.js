//test example to check if import and export was working properly
export let add = (num1, num2) => num1 + num2;

//Even or Odd Assigment Arrow Function
export let evenOrOdd = (num) => {
    if (typeof num == "number") {
      // string , number, boolean, object, function
      if (num % 2 == 0) {
        return "even";
      } else {
        return "odd";
      }
    }
    return "not a number";
  };

  //Prime number Arrow Function
  export const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };
  
//factorial number Arrow Function
  export const factorial = (num, fact = 1) => {
    if(num){
       return factorial(num-1, fact*num);
    };
    return fact;
 };

 //strong number Arror Function
 export function isStrong(n) {      //inputs a number
    function fac(n, f = 1) {  //factorial logic 
      while (n > 1) {
        f *= n--;
      }
      return f;
    }
    let res = String(n)
      .split("")           //splits numbers ["1", "4", "5"]
      .map((a) => fac(+a)) //converts to strings back to a number, looping over each element +"1" = 1 | [1, 24, 120]
      .reduce((a, b) => a + b); //1 + 24 + 120 = 145
    return res === n;           //true or false
  };


  //Palindrome Arrow Function
 export const isPalindrome = el => {
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