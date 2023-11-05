const fs = require("fs");
let [A, B, C] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

A = BigInt(A);
C = BigInt(C);

let cache = {};
cache[1n] = BigInt(A % C);
cache[2n] = BigInt(((A % C) * (A % C)) % C);

function f(b) {
  if (cache[b] !== undefined) return cache[b];

  if (b % 2n) {
    cache[b] = (f(1n) * f(b-1n)) % BigInt(C);
    return cache[b];
  }
  cache[b] = f(b/2n) * f(b/2n) % BigInt(C);
  return cache[b];
}

console.log(Number(f(BigInt(B))));