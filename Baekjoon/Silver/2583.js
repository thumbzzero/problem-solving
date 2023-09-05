const fs = require("fs");
const input = fs
  .readFileSync(
    "/dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

const [M, N, K] = input[0].split(" ").map(Number);
input.shift();
const points = input.map((line) => line.split(" ").map(Number));

let Map = new Array(N).fill([]);
Map = Map.map(() => new Array(M).fill(0));
let sizes = [];

points.map((rectangle) => {
  for (let i = rectangle[0]; i < rectangle[2]; i++) {
    for (let j = rectangle[1]; j < rectangle[3]; j++) {
      Map[i][j] = 1;
    }
  }
});

let visited = new Array(N).fill([]);
visited = visited.map(() => new Array(M).fill(0));

function OOB(x, y) {
  return x < 0 || x >= N || y < 0 || y >= M;
}

let size = 0;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function DFS(x, y) {
  if (OOB(x, y)) return;
  if (visited[x][y]) return;
  if (Map[x][y]) return;

  visited[x][y] = 1;
  size++;
  for (let i=0; i<4; i++) {
    DFS(x + dx[i], y + dy[i]);
  }
}

for (let i=0; i<N; i++) {
  for (let j=0; j<M; j++) {
    DFS(i, j);
    if (size !== 0) {
      sizes.push(size);
      size = 0;
    }
  }
}

console.log(sizes.length);  // 3
console.log(sizes.sort((a, b) => a - b).join(" "));  // 1 7 13
