// let n1 = 0;
// let n2 = 1;
// let sum = 0;

// for (let i = 0; i<=10; i++){
//     console.log(n1);
//     sum = n1 + n2;
//     n1 = n2;
//     n2 = sum;
// }

let str = 'My name is a kushal';
let strArr = str.split(' ');
console.log(strArr);

let maxLen = 0;
let maxStr = '';

for(let i = 0; i < strArr.length; i++){
    if(strArr[i].length>maxLen){
        maxLen=strArr[i].length
        maxStr=strArr[i];
    }
}
console.log(maxStr);

let minLen = maxLen;
let minStr = '';
for(let i = 0; i < strArr.length; i++){
    if(strArr[i].length<minLen){
        minLen=strArr[i].length
        minStr=strArr[i];
    }
}
console.log(minStr);