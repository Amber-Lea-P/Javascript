var a= [10, 2, 351, -42, -53];

var even = a.filter(number => {
    return number % 2 === 0;
});
console.log(even);