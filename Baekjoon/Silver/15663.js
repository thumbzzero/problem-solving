const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);
N = nums.length;
let answer = [];

function f(seq, idxs) {
  if (seq.length === M) {
    answer.push(seq.join(' '));
  }
  for (let n=0; n<N; n++) {
    if (!idxs.includes(n)) {
      f([...seq, nums[n]], [...idxs, n]);
    }
  }
}

f([], []);
console.log([...new Set(answer)].join('\n'));