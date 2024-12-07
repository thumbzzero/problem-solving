const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(' ').map(Number);
const combinations = {};
let answer = 0;

for (const c of input) {
  const [a, b] = c.split(' ').map(Number).sort((a, b) => a - b);
  if (combinations[a] === undefined) combinations[a] = [b];
  else combinations[a].push(b);
}

for (let i=1; i<=N-2; i++) {
  for (let j=i+1; j<=N-1; j++) {
    if (combinations[i]?.includes(j)) continue;
    for (let k=j+1; k<=N; k++) {
      if (combinations[i]?.includes(k)) continue;
      if (combinations[j]?.includes(k)) continue;
      answer++;
    }
  }
}

console.log(answer);
