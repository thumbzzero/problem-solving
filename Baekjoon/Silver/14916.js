const fs = require("fs");
let N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let cache = new Array(N+1).fill(Infinity);
cache[2] = cache[5] = 1;

function f(n) {
  if (n < 2 || n > N) return Infinity;
  if (cache[n] !== Infinity) return cache[n];
  cache[n] = Math.min(f(n-2) + 1, f(n-5) + 1);
  return cache[n];
}

console.log(f(N) !== Infinity ? f(N) : -1);