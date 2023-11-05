const fs = require("fs");
const [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

answer = [];

function f(v, seq) {
  if (seq.length >= M) {
    answer.push(seq);
    return;
  }
  for (let i=v+1; i<=N; i++) {
    f(i, [...seq, i]);
  }
}

for (v=1; v<=N-M+1; v++) {
  f(v, [v]);
}

answer.forEach(s => console.log(s.join(' ')));