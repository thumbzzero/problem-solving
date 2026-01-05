const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number);
let answer = [];

function f(seq) {
  if (seq.length >= M) {
    answer.push(seq.join(' '));
    return;
  }
  for (let i=1; i<=N; i++) {
    f([...seq, i], i);
  }
}

for (let i=1; i<=N; i++) {
  f([i]);
}

console.log(answer.join('\n'));
