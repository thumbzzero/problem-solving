const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const v = input.slice(1).map(Number).sort();

let cache = new Array(k + 1).fill(0);
cache[0] = 1;

function cal(v) {
  let i = 0;
  while (i + v <= k) {
    cache[i + v] += cache[i];
    i++;
  }
}

v.map((value) => cal(value));

console.log(cache[k]);
