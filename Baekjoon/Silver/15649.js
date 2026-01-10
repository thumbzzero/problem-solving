const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const [N, M] = input[0].split(' ').map(Number);

  const answer = [];

  function f(seq) {
    if (seq.length === M) {
      answer.push(seq.join(' '));
    }
    for (let i=1; i<=N; i++) {
      if (seq.includes(i)) continue;
      f([...seq, i]);
    }
  }

  for (let i=1; i<=N; i++) {
    f([i]);
  }

  console.log(answer.join('\n'));
