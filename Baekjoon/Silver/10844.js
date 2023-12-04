const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let cache = new Array(N+1).fill([]).map(() => new Array(10).fill(0n));
for (let i=0; i<=9; i++) cache[1][i] = 1n;

function sum(nums) {
  return nums.reduce((total, current) => total + current);
}

function f(len, last) {
  if (len < 0 || len > N) return 0n;
  if (last < 0 || last >= 10) return 0n;
  if (cache[len][last] !== 0n) return cache[len][last];

  cache[len][last] = f(len-1, last+1) + f(len-1, last-1);
  return cache[len][last];
}

if (N === 1) {
  console.log(9);
  return;
}

for (let i=1; i<=9; i++) f(N, i);

console.log((sum(cache[N]) % 1000000000n).toString());