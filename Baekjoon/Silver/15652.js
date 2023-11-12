const fs = require("fs");
const [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let answer = '';

function f(seq) {
  if (seq.length >= M) {
    answer += `${seq.split('').join(' ')}\n`;
    return;
  }
  
  for (let i=parseInt(seq[seq.length-1]); i<=N; i++) {
    f(`${seq}${i}`);
  }
}

for (let i=1; i<=N; i++) f(`${i}`)
console.log(answer);