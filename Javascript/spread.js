// async function myDisplay() {
//     let myPromise = new Promise(function(myResolve, myReject) {
//       myResolve("hi !!");
//     });
//    console.log(await myPromise) ;
//   }
  
//   myDisplay();

// Spread operator (…)

// Although the syntax of spread operator is exactly the same as the rest parameter, spread operator is used to spread an array,
//  and object literals. We also use spread operators where one or more arguments are expected in a function call.


// Note- Key differences between rest parameter and spread operator:
// Rest parameter is used to take a variable number of arguments and turns into an array while the spread operator takes an array 
// or an object and spreads it
// Rest parameter is used in function declaration whereas the spread operator is used in function calls

let obj = {name:"anc"};
Object.freeze(obj)
obj.age=14;
console.log(obj);
