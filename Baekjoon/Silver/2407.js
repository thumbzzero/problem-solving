const fs = require("fs");
const [n, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const factorial = {};

function f(n) {
  if (factorial[n] !== undefined) return factorial[n];
  if (n <= 1) return 1n;
  factorial[n] = n * f(n - 1n);
  return factorial[n];
}

function c(n, m) {
  m = m < n-m ? m : n-m;
  if (n <= 1 || m <= 0) return 1;
  return f(n) / f(m) / f(n-m)
}

console.log(c(BigInt(n), BigInt(m)).toString());
