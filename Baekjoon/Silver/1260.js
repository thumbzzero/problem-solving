const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, start] = input.shift().split(' ').map(Number);
let Graph = new Array(N+1).fill([]).map(() => new Array(N+1).fill(0));

input.map((edge) => {
  const [v1, v2] = edge.split(' ').map(Number);
  Graph[v1][v2] = Graph[v2][v1] = 1;
});

// DFS
let visited1 = new Array(N+1).fill(0);
let answer1 = '';

// BFS
let visited2 = new Array(N+1).fill(0);
let answer2 = '';
let queue = [];

function DFS(v) {
  if (visited1[v]) return;
  visited1[v] = 1;
  answer1 += `${v} `;

  for (let vertex = 1; vertex <= N; vertex++) {
    if (Graph[v][vertex] && !visited1[vertex]) DFS(vertex);
  }
}

function BFS(start) {
  queue.push(start);

  while (queue.length !== 0) {
    let v = queue.shift();
    visited2[v] = 1;
    answer2 += `${v} `;
    for (let vertex = 1; vertex <= N; vertex++) {
      if (Graph[v][vertex] && !visited2[vertex]) {
        visited2[vertex] = 1;
        queue.push(vertex);
      }
    }
  }
}

DFS(start);
BFS(start);

console.log(answer1);
console.log(answer2);