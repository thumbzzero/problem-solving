const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
let triangle = [[parseInt(input.shift())]];
input.forEach((t) => triangle.push(t.split(" ").map(Number)));

let cache = new Array(N).fill([]).map((a, i) => new Array(i + 1).fill(-1));
cache[0][0] = triangle[0][0];

function f(n, m) {
  if (n < 0 || n >= N || m < 0 || m > n) return -1;
  if (cache[n][m] !== -1) return cache[n][m];
  cache[n][m] = Math.max(f(n-1, m-1), f(n-1, m)) + triangle[n][m];
  return cache[n][m];
}

for (let n = 0; n < N; n++) {
  for (let m = 0; m < N; m++) {
    f(n, m);
  }
}

console.log(Math.max(...cache[N - 1]));