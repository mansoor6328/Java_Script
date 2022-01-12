var obj=`{"name":"john","age":"21"}`;
console.log(obj);

var obj1 = JSON.parse(obj);
console.log(obj1);

var obj2 = JSON.stringify(obj1);
console.log(obj2);