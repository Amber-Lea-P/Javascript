// array is a collection of simliar type content.
// 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

var a= [10, 20, 30, 40, 50];

//array position reference will start at 0
// the last index : size-1 (size means the total amount of elements, example =5)

for (const i  of a) {
    console.log(i);
}
//let is used to declare the variable
// var and let diff.

for (let i = 0; i< a.length; i++) {  //length and size are both the same
    let element = a[i];
    console.log(element);
}
//let element's initial value of 10 
//both of the above mentioned equations are the same. The second is just explained in more detail 