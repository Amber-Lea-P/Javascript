const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const factorial = (num, fact = 1) => {
   if(num){
      return factorial(num-1, fact*num);
   };
   return fact;
};
const factorialArray = arr => arr.map(element => factorial(element));

console.log(factorialArray(arr));