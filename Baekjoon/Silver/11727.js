const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let cache = new Array(N+1).fill(-1);
cache[1] = 1n;
cache[2] = 3n;

function f(n) {
  if (n <= 0 || n > N) return -1;
  if (cache[n] !== -1) return cache[n];
  cache[n] = BigInt(2n * f(n-2) + f(n-1));
  return cache[n];
}

console.log(Number(f(N) % 10007n));