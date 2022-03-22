const arr = [1,8,9,2,5,5,3,5,6,7];

//find max and min number 
//find occurence of 5 

let count = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i]==5){
        count++;
    }
}
console.log(count);

console.log(arr.sort());
console.log(Math.max(...arr));
console.log(Math.min(...arr));
console.log("mininum number = "+arr[0]);
console.log("maximum number = "+arr[7]);

console.log(arr.indexOf(8));

// sorting for ascending and descending order
arr.sort((a,b) => {
    return b - a;
})
console.log(arr);

//Inbuilt sort and reverse methods
console.log(arr.reverse());
console.log(arr.sort());

arr.splice(3,1,6); //Delete and update the record
console.log(arr);

arr.unshift(0);  // Add the data in beginning
console.log(arr);

arr.shift(); //Remove the data from beginning
console.log(arr);

//LILO
// arr.push(8);
// arr.pop();
// console.log(arr);