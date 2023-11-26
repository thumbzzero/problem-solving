const fs = require("fs");
const [N, k] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

/*
B[k] = t 일 때,

탐색의 기준: t
이분탐색 종료 조건: t보다 작거나 같은 원소의 개수가 최소 k
*/

function getCount(t) {
  let count = 0;

  for (let n=1; n<=N; n++) {
    count += Math.min(Math.floor(t/n), N);
  }

  return count;
}

function binarySearch(start, end) {
  if (start > end) return end;
  
  let mid = Math.floor(start + (end - start) / 2);
  if (getCount(mid) >= k) return binarySearch(start, mid-1);
  return binarySearch(mid+1, end);
}

console.log(binarySearch(1, N*N)+1);