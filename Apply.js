// The apply method is similar to the call() method. The only difference is that,

// call() method takes arguments separately whereas, apply() method takes arguments as an array.

var person={
    age :23,
    getAge : function(...name){
        return name[0]+name[1] + " is " +this.age;
    }
}
var person2={
    age : 46
};
console.log(person.getAge.apply(person2,['Jhon','cena']));