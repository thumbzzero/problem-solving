const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const sequence = input[1].split(' ').map(Number);

let cache = new Array(N).fill(1);

// 수열의 n번째 항이 부분 수열의 마지막 항일 때 가장 긴 증가하는 부분 수열의 길이 
function f(n) {
  for (let i=0; i<n; i++) {
    if (sequence[i] < sequence[n]) {
      cache[n] = Math.max(cache[n], cache[i] + 1);
    }
  }

  return cache[n];
}

for (let i=0; i<sequence.length; i++) f(i);
console.log(Math.max(...cache));