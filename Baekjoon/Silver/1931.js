const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
const meetings = input
  .map((m) => m.split(" ").map(Number))
  .sort(([a1, b1], [a2, b2]) => a1 - a2)
  .sort(([a1, b1], [a2, b2]) => b1 - b2);

let answer = 1;
let cur = meetings[0];

for (let i=1; i<N; i++) {
  let [start1, end1] = cur;
  let [start2, end2] = meetings[i];
  if (end1 <= start2) {
    answer++;
    cur = meetings[i];
  }
}

console.log(answer);