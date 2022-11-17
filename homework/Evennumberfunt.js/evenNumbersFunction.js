const numbers = [2, 5, 7, 10, 34, 16, 879, 1];

function evenNumbers(numbers) {
  return numbers.filter(n => n % 2 == 0);
}

console.log(evenNumbers(numbers));
