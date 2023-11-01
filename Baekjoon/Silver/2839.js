const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let cache = new Array(N+1).fill(0);
cache[3] = cache[5] = 1;
cache[4] = -1;

function f(n) {
  if (n < 3 || n > N) return -1;
  if (cache[n] !== 0) return cache[n];
  let temp = [];
  if (f(n-3) !== -1) temp.push(f(n-3));
  if (f(n-5) !== -1) temp.push(f(n-5));
  cache[n] = temp.length ? Math.min(...temp) + 1 : -1;
  return cache[n];
}

console.log(f(N));