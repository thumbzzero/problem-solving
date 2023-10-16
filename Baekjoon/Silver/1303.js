const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input.shift().split(' ').map(Number);
const graph = input.map((row) => row.split(''));

let temp = {
  W: 0,
  B: 0,
};

let visitedW = new Array(N).fill([]).map(() => new Array(M).fill(0));
let visitedB = new Array(N).fill([]).map(() => new Array(M).fill(0));

let white = 0;
let blue = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function OOB(n, m) {
  return n < 0 || n >= N || m < 0 || m >= M;
}

function DFS(team, n, m, visited) {
  if (OOB(n, m)) return;
  if (visited[n][m]) return; 
  if (!(graph[n][m] === team)) return;

  visited[n][m] = 1;
  temp[team] += 1;
  for (let i=0; i<4; i++) {
    DFS(team, n + dx[i], m + dy[i], visited);
  }
}

for (let n=0; n<N; n++) {
  for (let m=0; m<M; m++) {
    temp.W = temp.B = 0;
    DFS('W', n, m, visitedW);
    DFS('B', n, m, visitedB);
    white += Math.pow(temp.W, 2);
    blue += Math.pow(temp.B, 2);
  }
}

console.log(white, blue);