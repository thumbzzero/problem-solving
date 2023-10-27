const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

function factorial(n) {
  if (n < 2) return 1n;
  return BigInt(n) * factorial(n - 1);
}

let factorialN = factorial(N).toString();
let answer = 0;

for (let i=factorialN.length-1; i >= 0; i--) {
  if (factorialN[i] !== '0') break;
  answer++;
}

console.log(answer);