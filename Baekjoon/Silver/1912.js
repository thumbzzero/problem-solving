const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const ary = input[1].split(' ').map(Number);

let dp = [...ary];
let answer = ary[0];

for (let i=1; i<n; i++) {
  dp[i] = Math.max(dp[i], dp[i-1] + ary[i]);
  if (answer < dp[i]) answer = dp[i];
}

console.log(answer);