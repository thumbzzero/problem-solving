const fs = require("fs");
const [N, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let answer = '';

function isPrime(n) {
  if (n === 0 || n === 1) return false;

  p=2;
  while (p*p <= n) {
    if (n % p === 0) return false;
    p++;
  }
  
  return true;
}

for (let n of input) {
  while (!isPrime(n)) n++;
  answer += `${(n)}\n`;
}

console.log(answer);