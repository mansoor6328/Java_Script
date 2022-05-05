console.log("abc");


let arr=[-9,6,8,9,0,6,8]

const arry = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
const duplicateElementa = toFindDuplicates(arr);
console.log(duplicateElementa);


const dupliarr = [...new Set(arr)];
console.log(dupliarr);
