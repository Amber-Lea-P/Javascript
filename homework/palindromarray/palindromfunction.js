const arr = [313, 26, 272, 545, 39, 616, 868, 19, 12, 737];

function reverse(arr){
    return arr.split("").reverse().join("");
}
function checkIsPalindrome(arr){
  var result=[];
  for(var i=0;i<arr.length;i++){
      result.push(arr[i]==reverse(arr[i]));
      console.log(reverse(arr[i]));
  }
  return result;
}
console.log(checkIsPalindrome(arr));
