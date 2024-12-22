const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const numbers = input.shift().split(' ').map(Number);
const M = Number(input.shift());
const sums = [numbers[0]];

for (let i=1; i<N; i++) {
  sums.push(sums[i-1] + numbers[i]);
}

for (let m=0; m<M; m++) {
  const [i, j] = input[m].split(' ').map((v) => v-1);
  if (i === 0) console.log(sums[j]);
  else console.log(sums[j] - sums[i-1]);
}