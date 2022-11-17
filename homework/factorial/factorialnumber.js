const arr = [1, 2, 3, 4, 5];


  function getFactorialForLoop(n) {
      let result = 1;
      if (n > 1) {
          for (let i = 1; i <= n; i++) {
              result = result * i;
          }
          return result;
      }
      else {
          return "n has to be positive";
      }
  }
console.log(getFactorialForLoop(4));