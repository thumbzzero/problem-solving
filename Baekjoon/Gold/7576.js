const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [M, N] = input.shift().split(' ').map(Number);
let graph = input.map((row) => row.split(' ').map(Number));

let rest = 0;
graph.forEach((row) => {
  row.forEach(t => {
    if (t === 0) rest++;
  })
})

let visited = new Array(N).fill(0).map(() => new Array(M).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function OOB(n, m) {
  return n < 0 || n >= N || m < 0 || m >= M;
}

function BFS() {
  if (rest === 0) return 0;

  let queue = [];
  let count = 1;

  graph.forEach((row, n) => {
    row.forEach((t, m) => {
      if (t === 1) {
        queue.push([n, m]);
        visited[n][m] = true;
      }
    })
  })

  let idx = 0, qLen = queue.length;

  while (idx < queue.length) {
    let [cx, cy] = queue[idx++];

    for (let i=0; i<4; i++) {
      let nx = cx + dx[i], ny = cy + dy[i];
      if (OOB(nx, ny)) continue;
      if (graph[nx][ny]) continue;
      if (visited[nx][ny]) continue;
      visited[nx][ny] = true;
      graph[nx][ny] = 1;
      rest--;
      queue.push([nx, ny]);
    }
    if (rest <= 0) return count;
    if (idx === qLen) {
      count++;
      qLen = queue.length;
    }
  }
  return -1;
}

console.log(BFS());