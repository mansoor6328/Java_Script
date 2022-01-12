
// It provides an improved way of handling parameters of a function.

// Using the rest parameter syntax, we can create functions that can take a variable number of arguments.

// Any number of arguments will be converted into an array using the rest parameter.

// It also helps in extracting all or some parts of the arguments.

// Rest parameter can be used by applying three dots (...) before the parameters

function fun(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(fun(1,2)); //3
console.log(fun(1,2,3)); //6
console.log(fun(1,2,3,4,5)); //15 