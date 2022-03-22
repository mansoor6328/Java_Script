function x()
{
    var a = 10;
    function y()
    {
        function z()
        {
            console.log(a);
        }
        z();
    }
    y();
}
x();