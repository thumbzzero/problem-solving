const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, K] = input[0].split(' ').map(Number);
let board = new Array(N).fill([]).map(() => new Array(M).fill(0));
let visited = new Array(N).fill([]).map(() => new Array(M).fill(false));
let locations = [];
let size = 0, answer = -Infinity;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let k=1; k<=K; k++) {
  let [n, m] = input[k].split(' ').map(Number);
  board[n-1][m-1] = 1;
  locations.push([n-1, m-1]);
}

function OOB(n, m) {
  return n < 0 || n >= N || m < 0 || m >= M;
}

function DFS(n, m) {
  if (OOB(n, m)) return;
  if (visited[n][m]) return;
  if (!board[n][m]) return;
  
  visited[n][m] = true;
  size++;
  for (let i=0; i<4; i++) {
    let [nx, ny] = [n + dx[i], m + dy[i]];
    DFS(nx, ny);
  }
}

locations.forEach(([n, m]) => {
  if (!visited[n][m]) {
    size = 0;
    DFS(n, m);
    if (size > answer) answer = size;
  }
})

console.log(answer);