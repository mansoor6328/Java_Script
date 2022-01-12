function student(regNo,name,marks)
{
	this.regNo = regNo;
	this.name = name;
	this.marks = marks;
    
}
var student1 = new student(10,"Raju",96.63);

console.log(student1.display());
