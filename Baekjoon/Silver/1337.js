const fs = require("fs");
const [N, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

input.sort((a, b) => a - b);
let answer = 4;
let p1, p2;

for (let i=0; i<N-1; i++) {
  p1 = i , p2 = N-1;
  while (p1 < p2) {
    if (input[p2] - input[p1] >= 5) p2--;
    else {
      answer = Math.min(answer, 4 - (p2 - p1));
      break;
    }
  }
}

console.log(answer);