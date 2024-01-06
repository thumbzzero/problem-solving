const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, X] = input[0].split(' ').map(Number);
const visitors = input[1].split(' ').map(Number);

let sum = new Array(N+1).fill(0);
let p1 = 0, p2 = X;
let answer = [0, 0];

for (let i=1; i<=N; i++) sum[i] = sum[i-1] + visitors[i-1];

while (p2 <= N) {
  let count = sum[p2] - sum[p1];
  if (count > answer[0]) {
    answer[0] = sum[p2]-sum[p1];
    answer[1] = 1;
  } else if (count === answer[0]) {
    answer[1] += 1;
  }
  p1++;
  p2++;
}

console.log(answer[0] ? answer.join('\n') : 'SAD');