const arr = [
  {
    id: 1,
    name: "A",
  },
  {
    id: 2,
    name: "B",
  },
  {
    id: 1,
    name: "C",
  },
  {
    id: 2,
    name: "D",
  },
];

const n = [];

arr.forEach((i) => {
  var x;
  if (n.some((x) => x.id == i.id)) {
    n.forEach((x) => {
      if (x.id == i.id) {
        x.data.push(i.name);
      }
    });
  } else {
    n.push({ id: i.id, data: [i.name] });
  }
});

console.log(n);
