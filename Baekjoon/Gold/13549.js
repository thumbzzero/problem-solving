const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const MAX = 100001;

let time = new Array(MAX).fill(Infinity);
let visited = new Array(MAX).fill(false);

function BFS() {
  let queue = [N], qIdx = 0;
  time[N] = 0, visited[N] = true;

  let cur, next;
  while (qIdx < queue.length) {
    cur = queue[qIdx++];
    next = [cur * 2, cur - 1, cur + 1];

    for (let i=0; i<3; i++) {
      let n = next[i];
      if (n < 0 || n >= MAX) continue;
      if (visited[n]) continue;

      visited[n] = true;
      queue.push(n);
      
      if (i === 0) time[n] = Math.min(time[n], time[cur]);
      else time[n] = Math.min(time[n], time[cur] + 1);

      if (n === K) return;
    }
    
  }
}

BFS();
console.log(time[K]);