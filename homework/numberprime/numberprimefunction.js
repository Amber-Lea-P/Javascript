const array = [-5, -3, -2, -1, 0, 1, 2, 3, 8, 9, 7]; 


function isPrime(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime))