// let a=[1,2,3]
// let b=[1,2,3]
// console.log(a==b);

// var numbers = [1,2,3]

// var duplicateNumbers =[1,2,3]

// duplicateNumbers.push(4)

// console.log(numbers,duplicateNumbers);

// let str="kushal"

// console.log(str[0].toUpperCase()+str.substring(1));

// function delay(ms) {
//   // code here

//   const obj = {
//     then: function (x) {
//       setTimeout(() => x(), ms);
//     },
//   };

//   return obj;
// }
// delay(5000).then(() => {
//   console.log("after 5 seconds");
// });

// function capital(x) {
//   const ar = x
//     .split(" ")
//     .map((i) => i[0].toUpperCase() + i.substr(1).toLowerCase())
//     .join(" ");
//   console.log(ar);
//   return ar;
// }

// console.log(capital("kushaL kumar"));

// const r = (() => {
//     var n = 1;
//     const m = 2;
//     return n + m;
//    })();
//    console.log(n);

// function immediateA(a) {
//     return function immediateB(b) {
//       console.log(a); // What is logged?output-0;
//     };
//   }
//   const b = immediateA(0);
// b(1)

// (function immediateA(a) {
//     return (function immediateB(b) {
//       console.log(a); // What is logged? output -0
//     })(1);
//   })(0);

// let count = 0;
// (function immediate() {
//  if (count === 0) {
//    let count = 1;
//    console.log(count); // What is logged?output-1
//  }
//  console.log(count); // What is logged?output-0
// })();

// let count = 0;
// (function immediate() {
//   if (count === 0) { //if block won't be executed
//    var count = 1;
//    console.log(count); // What is logged?
//  }
//  console.log(count); // What is logged? o/p - undefined
// })();
// console.log(count);


// let count = 2;
// (function immediate() {
// if (count === 0) {
// var count = 1;
// console.log(count); // What is logged?
// }
// console.log(count); // What is logged?
// })();

// const characters = 'rnoc ooilehtbeootgf!ss'
// const document = 'robosoft technologies!'

// const c = characters.split('').sort().join('');
// const d = document.split('').sort().join('');

// console.log(c);
// console.log(d);

// console.log(c.includes(d))

const arr = [
    [1, 2],
    [3, 4, 5],
    [6, 7, [8, 9]],
    [10, 11, 12],
  ];
  const arr1 = arr.flat(2);
  
  let ar = [];
  
  arr.forEach((x) =>
    x.forEach((y) => {
      if (typeof y == "object") y.forEach((z) => ar.push(z));
      else ar.push(y);
    })
  );
  
  console.log(ar);
  console.log(arr1);
  