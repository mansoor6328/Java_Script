// function first(name)
// {
//     console.log(`buffer, ${name}.how are you`);
// }
// first("bcd");
// first("abc");

var getUserRole = function (name, role)
{
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break;
    
        default:
            break;
    }
}

console.log(getUserRole("abc","admin"));