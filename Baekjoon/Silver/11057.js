const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let cache = new Array(N+1).fill([]).map(() => new Array(10).fill(0n));
let answer = 0n;

function f(n, last) {
  if (n < 1 || n > N) return;
  if (last < 0 || last > 9) return;
  if (cache[n][last] !== 0n) return cache[n][last];

  if (n === 1) {
    cache[n][last] = 1n;
  } else {
    for (let l=0; l <= last; l++) {
      cache[n][last] += f(n-1, l);
    }
  }

  return cache[n][last];
}

for (let l=0; l<=9; l++) {
  answer += f(N, l);
}

console.log((answer % 10007n).toString());