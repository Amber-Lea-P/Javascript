const dataToCheckAndPrint = [1, 2, 145, 205, 255, 1000, 500, 26, 8, 999];

function isStrong(n) {      //inputs a number
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
}

const strongNumbers = dataToCheckAndPrint.filter((element) =>
  isStrong(element)
);
console.log(strongNumbers)
// for optimization .filter.forEach repleace with reduce
//  # 2
dataToCheckAndPrint.forEach((element) => {
    if (isStrong(element)) console.log(element);
    return;
  });