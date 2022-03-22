function multiply(a,b)
{
    return a*b;
}
function currying(fn)
{
    return function(a)
    {
        return function(b)
        {
            return fn(a,b);
        }
    }
}
var curryMultiply = currying(multiply);
console.log(multiply(4,3));
console.log(curryMultiply(4)(3));