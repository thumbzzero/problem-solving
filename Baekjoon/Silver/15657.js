const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);
let answer = '';

function f(seq, idx) {
  if (seq.length === M) {
    answer += `${seq.join(' ')}\n`;
    return;
  }
  for (let n=idx; n<N; n++) {
    f([...seq, nums[n]], n);
  }
}

f([], 0);
console.log(answer);