// Currying is a technique of evaluating function with multiple arguments, 
// into sequence of functions with single argument.In other words, when a function, 
// instead of taking all arguments at one time, takes the first one and return a new function 
// that takes the second one and returns a new function which takes the third one, and so forth, 
// until all arguments have been fulfilled.

// Uses of currying function
//   a) It helps to avoid passing same variable again and again.

//   b) It is extremely useful in event handling. 

//using bind method
// let multiply = function(a,b){
//     console.log(a * b); 
// }

// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(3);

// let multiplyByThree = multiply.bind(this,2);
// multiplyByThree(7);


let multiply = function(x) {
    return function(y){
        console.log(x * y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3);