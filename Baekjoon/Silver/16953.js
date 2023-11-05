/* BFS로 분류된 문제이나 DP로 풀이함 */

const fs = require("fs");
const [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

cache = {};
cache[A] = 1;

function f(n) {
  if (n < A) return -1;
  if (n !== Math.floor(n)) return -1;
  if (cache[n] !== undefined) return cache[n];

  let temp = [];
  if (f(n/2) !== -1) temp.push(f(n/2));
  if (f((n-1) / 10) !== -1) temp.push(f((n-1) / 10));

  if (temp.length === 0) return -1;
  cache[n] = Math.min(...temp) + 1;
  return cache[n];
}

console.log(f(B));