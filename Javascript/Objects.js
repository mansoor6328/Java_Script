//1.Using Object literls

// const person = {
//   FirstName: "Dinga",
//   LastName: "Kumar",
//   id: 10,
//   age: 21,
//   get ln() {
//     return this.LastName;
//   },
//   FullName: function () {
//     return this.FirstName + " " + this.LastName;
//   },
// };
// console.log(person.FullName());
// console.log(person.ln);

//2.Using new Keyword

// const person = new Object();
// person.firstName = "Dinga";
// person.lastName = "Kumar";
// person.age = 21;

// console.log(person.firstName);

//3.using constructor

let person = function(name,age){
    this.name = name;
    this.age = age;
}
let per = new person("vardhan",19);
console.log(per);

person.prototype.number = 812359299;
console.log(per);


//4.Using create 

// function person(age){
//     this.age = age;
// }
// var age = new person(21)
// console.log(age);
// p2 = Object.create(age);
// console.log(p2.age);

