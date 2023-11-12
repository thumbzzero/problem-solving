const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);

let answer = '';

function f(seq, idxs) {
  if (seq.length >= M) {
    answer += `${seq.join(' ')}\n`;
    return;
  }

  nums.forEach((num, idx) => {
    if (!idxs.includes(idx)) {
      f([...seq, num], [...idxs, idx]);
    }
  })
}

nums.forEach((num, idx) => f([num], [idx]));

console.log(answer);