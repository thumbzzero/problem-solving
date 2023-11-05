const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let cache = {};
cache[1n] = cache[2n] = 1n;

function f(n) {
  if (n < 1n) return -1n;
  if (cache[n] !== undefined) return cache[n];
  cache[n] = f(n-1n) + f(n-2n);
  return cache[n];
}

console.log(f(BigInt(N)).toString());