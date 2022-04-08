let arr ="[1,2,5]"



let newR=(arr.slice(1,-1).split(',').map(Number));

if(newR.some(isNaN)){
    console.log('invalid');
}
else{
let sum = 0;
for(let i = 0; i < newR.length; i++){
    sum = sum + newR[i]
}

console.log(sum);
}

console.log(isNaN('k'));