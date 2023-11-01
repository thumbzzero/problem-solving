const fs = require("fs");
let N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let cache = new Array(N+1).fill(0);

function f(n) {
  if (Number.isInteger(Math.sqrt(n))) return 1;
  if (cache[n]) return cache[n];
  let min = Infinity;

  for (let i=1; i <= Math.sqrt(n); i++) {
    if (f(n-i*i) + f(i*i) < min) {
      min = f(n-i*i) + f(i*i);
    }
  }
  cache[n] = min;
  return cache[n];
}

console.log(f(N));