const fs = require("fs");
const [N, d]= fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let n = 1, answer = 0;

while (n <= N) {
  n.toString().split('').forEach((digit) => {
    if (digit == d) answer++;
  })
  n++;
}

console.log(answer);