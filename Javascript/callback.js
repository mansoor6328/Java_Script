function add(sum)
{
    console.log(sum + 1);
}
function operation(num1, num2, operation)
{
    var sum = num1 + num2;
    operation(sum)
}
operation(1, 2, add);