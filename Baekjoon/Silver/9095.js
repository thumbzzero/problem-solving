const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const MAX = 11;

const [T, ...Ns] = input.map(Number);
let cache = new Array(MAX).fill(-1);
cache[0] = cache[1] = 1;

function f(n) {
  if (n < 0 || n >= MAX) return 0;
  if (cache[n] !== -1) return cache[n];
  cache[n] = f(n-1) + f(n-2) + f(n-3);
  return cache[n];
}

f(Math.max(...Ns));
Ns.map((n) => console.log(cache[n]));