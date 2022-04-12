const items = [
  {
    name: "Ktm",
    price: 250000,
  },
  {
    name: "Pulsar",
    price: 175000,
  },
  {
    name: "Honda",
    price: 90000,
  },
  {
    name: "Bullet",
    price: 255000,
  },
];

//1.filter method
// const filteredItem = items.filter((item) =>{
//     if(item.price > 200000){
//         return true
//     }
//     else if(item.price == 90000){
//         return true
//     }
// })
// console.log(filteredItem);

//2.Map Method
// const mapItems = items.map((item)=>{
//     return item.name
// })

// console.log(mapItems);

//3.Find Method

// const findItems = items.find((item)=>{
//     return item.name === 'Ktm'
// })
// console.log(findItems);

//4.ForEach Method

// items.forEach((item)=>{
//     console.log(item.price);
// })

//5.Some Method

// const sportsBike = items.some((item)=>{
//     return item.price > 200000
// })

// console.log(sportsBike);

//6.Every Method

// const classBike = items.every((item)=>{
//     return item.price <= 100000
// })
// console.log(classBike);

//7.Reduce Method

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

