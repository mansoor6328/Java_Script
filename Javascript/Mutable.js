const user = {
    name:'kushal',
    age:24,
}

const newuser = Object.assign({},user,{name:`Hey ${user.name}`});
console.log(user);
console.log(newuser);