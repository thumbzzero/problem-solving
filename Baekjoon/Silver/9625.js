const fs = require("fs");
const K = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let cache = { A: new Array(K+1).fill(-1), B: new Array(K+1).fill(-1) };
cache.A[0] = 1;
cache.B[0] = 0;

function f(c, k) {
  if  (cache[c][k] !== -1) return cache[c][k];

  if (c === 'A') cache[c][k] = f('B', k-1);
  else cache[c][k] = f('A', k-1) + f('B', k-1);

  return cache[c][k];
}

console.log(`${f('A', K)} ${f('B', K)}`);