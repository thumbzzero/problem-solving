const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input.shift());
const scores = [0, ...input.map(Number)];

let cache = new Array(N+1).fill([]).map(() => new Array(2).fill(-1));

/* 계단 번호 n에서 연속으로 오른 계단 수가 cnt(1 or 2)일 때 최대 점수 */
function f(n, cnt) {
  if (n <= 0 || n > N) return 0;
  if (cache[n][cnt-1] !== -1) return cache[n][cnt-1];
  if (cnt === 1) {
    cache[n][cnt-1] = Math.max(f(n-2, 1), f(n-2, 2)) + scores[n];
  } else {
    cache[n][cnt-1] = f(n-1, 1) + scores[n];
  }
  
  return cache[n][cnt-1];
}

console.log(Math.max(f(N, 1), f(N, 2)));