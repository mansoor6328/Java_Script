// var arr = [10,20,30,80,20];

// arr.forEach((data) =>
// data+5 )
// console.log(arr);

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum);