const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let cache = new Array(N+1).fill(-1);
cache[1] = 1n;

function getZeroRemovedVersion(n) {
  n = n.toString();
  let idx = n.length - 1;
  while (n[idx] === '0') idx--;
  return BigInt(n.slice(Math.max(0, idx-12), idx+1));
}

let n = 2;
while (n <= N) {
  cache[n] = n < 9 ? BigInt(n) * cache[n-1] : getZeroRemovedVersion(BigInt(n) * cache[n-1]);
  n++;
}

console.log(cache[N].toString().slice(-5));