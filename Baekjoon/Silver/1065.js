const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let answer = 0;

function check(x) {
  if (x < 10) return true;

  x = x.toString().split('').map(Number);
  let diff = x[1] - x[0];
  for (let i=2; i<x.length; i++) {
    if (x[i] - x[i-1] !== diff) return false;
  }

  return true;
}

for (let x=1; x<=N; x++) {
  if (check(x)) answer++;
}

console.log(answer);
