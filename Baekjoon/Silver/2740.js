const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(' ').map(Number);
let A = [], B = [];

for (let n=0; n<N; n++) {
  A.push(input.shift().split(' ').map(Number));
}

const K = input.shift().split(' ').map(Number)[1];

for (let m=0; m<M; m++) {
  B.push(input.shift().split(' ').map(Number));
}

let answer = new Array(N).fill([]).map(() => new Array(K).fill(0));
for (let i=0; i<N; i++) {
  for (let j=0; j<K; j++) {
    for (let m=0; m<M; m++) {
      answer[i][j] += A[i][m] * B[m][j];
    }
  }
}

answer.forEach((row) => console.log(row.join(' ')));