// It’s a predefined method in javascript.

// This method invokes a method (function) by specifying the owner object.

var person={
    age :23,
    getAge : function(){
        return this.age;
    }
}
var person2={
    age : 46
};
console.log(person.getAge.call(person2));