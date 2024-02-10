const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const A = input[1].split(' ').map(Number).sort((a, b) => b - a);
const B = input[2].split(' ').map(Number).sort((a, b) => a - b);

function s() {
  let answer = 0;
  for (let i=0; i<N; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

console.log(s());
