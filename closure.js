// This ability of a function to store a variable for further reference even after it is executed, is called Closure.

function random()
{
  var obj={
    name : "John",
    age : 23
  };
  return function(){
    console.log(obj.name + " is " + "awesome");
  }
}
let x = random()
x()
let y = random()
y()