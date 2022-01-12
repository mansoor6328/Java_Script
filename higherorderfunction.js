function higher(fn){
    fn();
}

higher(function() {console.log("Hell0")});

function higherOrder2() {
    return function() {
      return "Do something";
    }
  }
          
  var x = higherOrder2();
  console.log(x());   // Returns "Do something"