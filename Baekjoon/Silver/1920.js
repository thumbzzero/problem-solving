const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, ...A] = [input[0], ...input[1].split(' ')].map(Number);
let [M, ...B] = [input[2], ...input[3].split(' ')].map(Number);

A = new Set(A);

let answer = '';
for (const b of B) {
  if (A.has(b)) answer += `1\n`;
  else answer += `0\n`;
}

console.log(answer);