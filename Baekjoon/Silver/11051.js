const fs = require("fs");
let [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
K = Math.min(K, N-K);
const dp = Array.from({ length: N+1 }, () => new Array(K+1));

for (let n = 0; n <= N; n++) {
  for (let r = 0; r <= n; r++) {
    if (r === 0 || n === r) {
      dp[n][r] = 1;
    } else {
      dp[n][r] = (dp[n-1][r-1] + dp[n-1][r]) % 10007;
    }
  }
}

console.log(dp[N][K]);
