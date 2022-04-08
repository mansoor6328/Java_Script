const users = [
  {
    name: "yagnesh",
    age: 33,
    gender: "male",
  },
  {
    name: "virat",
    age: 28,
    gender: "male",
  },
  {
    name: "rohit",
    age: 34,
    gender: "male",
  },
  {
    name: "alia",
    age: 19,
    gender: "female",
  },
  {
    name: "dipeeka",
    age: 25,
    gender: "female",
  },
  {
    name: "priyanka",
    age: 38,
    gender: "female",
  },
];

const groupByGender1 = users.reduce((p, c) => {
  if (p[c.gender] === undefined) {
    p[c.gender] = [];
  }
  p[c.gender].push(c);
  return p;
}, {});

console.log(groupByGender1);

const index = users.findIndex((x) => x.name === "asd");

console.log(index);

const index1 = users.reduce((p, c, i) => {
  if (c.name === "asdfd") {
    return i;
  }
  return p;
}, -1);

console.log(index1);

const femaleUsers = users.reduce((p, c) => {
  if (c.gender === "female") {
    p.push(c);
  }
  return p;
}, []);

console.log(femaleUsers);

console.log(index1);

const groupByGender = users.reduce((p, c) => {
  const key = `${Math.floor(c.age / 10)}0-${Math.floor(c.age / 16)}9`;
  if (p[key] === undefined) {
    p[key] = [];
  }
  p[key].push(c);
  return p;
}, {});
console.log(groupByGender);
