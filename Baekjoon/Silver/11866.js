const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let people = [];
let order = [];
let answer = '<';
for (let i=1; i<=N; i++) {
  people.push(i);
}

let idx = 0, k = 1;

function getNextIndex() {
  if (idx === N-1) return 0;
  return idx + 1;
}

while (order.length < N) {
  if (k === K && people[idx] !== -1) {
    order.push(people[idx]);
    people[idx] = -1;
    idx = getNextIndex();
    k = 1;
    continue;
  }
  if (people[idx] !== -1) k++;
  idx = getNextIndex();
  
}

for (let i=0; i<N; i++) {
  answer += order[i];
  if (i !== N-1) answer += ', ';
  else answer += '>';
}

console.log(answer);