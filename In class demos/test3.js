// printing numbers from 1 to 10.
// whenever we need to repeate the steps -/ process : in that cas we should use the loops
// 1. while: entry control : we dont know the number of times loops should be executes or we dont have a fixed criteria for condition.
// 2. for : entry control : steps / increment : or if you about the end limit  
// for loops for the arrays (Should be traversal order from 0 to size-1)
// 3. do while, exit control is not the preferred approach in good practice

var i = 1;
console.log("before loop");
do {
    console.log(i);
    i = i +1; // ++
}
while (i <= 10);
console.log("after loop");

for (var i = 1; i <= 10; i++) {
    console.log(i); }