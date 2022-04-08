const str="Welcome To India"
let rs=str.split(' ').map(i=>i.split('').reverse().join('')).join(' ')

console.log(rs);