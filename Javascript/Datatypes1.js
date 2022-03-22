// const arr = [
//     0,1,2,3,4,5,6
// ];

// for(var i = 0; i < arr.length; i++){
//     if(i % 2 !== 0){
//         console.log(arr[i]);
//     }
// }

// const arr1 = [0,1,2,4];
// const arr2 = [0,1,4];

// const arr3 = [...arr1,...arr2];
// console.log(arr3);
// arr1.push(5);
// console.log(arr1);

// const ar =[];
// ar.push(1);
// ar.push(2);
// console.log(ar);

// const arr = [1,2,3,5,6];
// const str = [];

// for(let i = 0; i < arr.length; i++){
//     if(i % 2 === 0){
//         str.push(arr[i]);
//     }
// }
// console.log(str.join(' '));

const arr = [1, 2, 3, 4, 5, 6, 7];

let result = false;

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (element === 5) {
    result = true;
    break;
  }
}

if (result === true) {
  console.log("Data is available");
} else {
  console.log("data is not available");
}

console.time();
for(let i = 0; i < arr.length; i++){
    
}
console.timeEnd();

console.time();
arr.forEach(element => {
    
})

console.timeEnd();