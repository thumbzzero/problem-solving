const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, k] = input.shift().split(' ').map(Number);
const v = input.map(Number);

let answer = 0;
let i = v.length - 1;
while (k > 0) {
  if (k < v[i]) {
    i--;
    continue;
  }
  while (k - v[i] >= 0) {
    k -= v[i];
    answer++;
  }
  i--;
}

console.log(answer);