const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(' ').map(Number);
let hash = {};
let count = 0;
let people = [];

input.forEach((p, i) => {
  if (i < N) {
    hash[p] = 1;
  } else {
    if (hash[p] !== undefined) {
      count++;
      people.push(p);
    }
  }
});

people.sort();
console.log(count);
console.log(people.join('\n'));