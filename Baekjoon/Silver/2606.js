const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
const pair = parseInt(input.shift());
const graph = new Array(N+1).fill([]).map(() => new Array(N+1).fill(0));

input.map((edge) => {
  const [e1, e2] = edge.split(' ').map(Number);
  graph[e1][e2] = graph[e2][e1] = 1;
});

let answer = 0;
let visited = new Array(N+1).fill(0);

function DFS(v) {
  if (visited[v]) return;
  visited[v] = 1;
  answer++;
  for (let i=1; i<=N; i++) {
    if (graph[v][i]) DFS(i);
  }
}

DFS(1);
console.log(--answer);