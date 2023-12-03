const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let cache = new Array(N+1).fill(-1n);
cache[1] = cache[2] = cache[3] = 1n;

function f(n) {
  if (cache[n] !== -1n) return cache[n];

  cache[n] = f(n-1) + f(n-3);
  return cache[n];
}

console.log(f(N).toString());