const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());
const MAX = 1000000;

let cache = new Array(MAX+1).fill(-1);
cache[1] = 0;

function f(n) {
  if (n <= 0 || n > MAX) return Infinity;
  if (parseInt(n) !== n) return Infinity;
  if (cache[n] !== -1) return cache[n];
  cache[n] = Math.min(f(n/3), f(n/2), f(n-1)) + 1;
  return cache[n];
}

console.log(f(N));