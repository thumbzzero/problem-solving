const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S] = input[0].split(' ').map(Number);
const seq = input[1].split(' ').map(Number);

let answer = 0;

// lastIdx: 마지막으로 선택한 원소의 인덱스, sum: 그때까지의 합산
function f(lastIdx, sum) {
  if (sum === S) answer++;
  
  for (let i=lastIdx+1; i<N; i++) {
    f(i, sum + seq[i]);
  }
}

for (let i=0; i<N; i++) f(i, seq[i]);

console.log(answer);