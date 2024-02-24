const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const isPrime = new Array(N+1).fill(true);
let order = 0, p = 2, answer = 2;

while (true) {
  if (isPrime[p]) {
    for (let i=1; p*i<=N; i++) {
      if (isPrime[p*i]) {
        isPrime[p*i] = false;
        answer = p*i;
        order++;
        if (order === K) {
          console.log(answer);
          return;
        }
      }
    }
  }
  p++;
}
