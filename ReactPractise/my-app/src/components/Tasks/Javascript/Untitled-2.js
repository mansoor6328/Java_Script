const str="India is Biggest population in the world"

const str1=str.split(" ")
console.log(str1);
let maxLength=0
let maxString=""
let minString=str1[0]
for(let i=1;i<str1.length;i++){
    console.log(minString.length);
   if(minString.length<str1[i].length){
       minString=str1[i]
   }
}
console.log(minString);

const array = [[1,2,3],[4,8,7]]