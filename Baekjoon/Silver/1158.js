const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const numbers = Array.from({ length: N }, (_, i) => i + 1);
const answer = [];
let idx = -1;
let remaining = N;

while (remaining > 0) {
  let cnt = 0;
  while (cnt < K) {
    idx = (idx + 1) % N;
    if (numbers[idx]) cnt++;
  }
  answer.push(numbers[idx]);
  numbers[idx] = 0;
  remaining -= 1;
}

console.log(`<${answer.join(', ')}>`); 