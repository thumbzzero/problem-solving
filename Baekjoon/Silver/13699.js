const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let cache = new Array(N+1).fill(0n);
cache[0] = 1n;

function f(n) {
  if (cache[n] !== 0n) return cache[n];

  for (let i = 0; i < Math.floor(n/2); i++) {
    cache[n] += f(i) * f(n-i-1);
  }

  cache[n] *= 2n;

  if (n % 2) {
    cache[n] += f(Math.floor(n/2)) ** 2n;
  } 

  return cache[n];
}

console.log(f(N).toString());