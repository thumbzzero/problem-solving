const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const MAX = 100001;

const [N, K] = input.split(" ").map(Number);
let isVisited = new Array(MAX).fill(0);
let answer = new Array(MAX).fill(0);

function OOB(x) {
  return x < 0 || x >= MAX;
}

function BFS(v) {
  let queue = [v];
  isVisited[v] = 1;
  let cur;

  while (queue.length) {
    cur = queue.shift();
    if (cur === N) return;
    
    let cases = cur % 2 ? [cur - 1, cur + 1] : [cur - 1, cur + 1, cur / 2];

    for (const c of cases) {
      if (OOB(c)) continue;
      if (!isVisited[c]) {
        isVisited[c] = 1;
        queue.push(c);
        answer[c] = answer[cur] + 1;
      }
    }
  }
}

BFS(K);
console.log(answer[N]);
