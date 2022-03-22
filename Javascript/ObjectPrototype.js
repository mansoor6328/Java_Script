function person(name,age)
{
    this.name = name;
    this.age = age;
}

var person1 = new person('abe',21)
person1.ph=2341;
console.log(person1);