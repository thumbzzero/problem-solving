const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);

let answer = [];

function f(seq, lastIdx) {
  if (seq.length >= M) {
    answer.push(seq.join(' '));
    return;
  }
  for (let i=lastIdx+1; i<N; i++) f([...seq, nums[i]], i);
}

for (let i=0; i<N; i++) f([nums[i]], i)

console.log([...new Set(answer)].join('\n'));