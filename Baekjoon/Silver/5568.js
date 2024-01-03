const fs = require("fs");
const [N, K, ...cards] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let hash = {};

function f(num, idxs) {
  if (idxs.length >= K) {
    hash[num] = hash[num] === undefined ? 1 : hash[num] + 1;
    return;
  }
  for (let i=0; i<N; i++) {
    if (!idxs.includes(i)) f(num + '' + cards[i], [...idxs, i]);
  }
}

for (let i=0; i<N; i++) f(cards[i], [i]);

console.log(Object.keys(hash).length);