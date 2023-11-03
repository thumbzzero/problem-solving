const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").reverse();

const T = parseInt(input.pop());
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let M, N, K, visited, board, locations;
let cnt = 0;
let answer = [];

function OOB(n, m) {
  return n < 0 || n >= N || m < 0 || m >= M;
}

function DFS(n, m) {
  if (OOB(n, m)) return;
  if (!board[n][m]) return;
  if (visited[n][m]) return;
  visited[n][m] = true;
  
  for (let i=0; i<4; i++) {
    let [nx, ny] = [n + dx[i], m + dy[i]];
    DFS(nx, ny);
  }
}

for (let t=0; t<T; t++) {
  [M, N, K] = input.pop().split(' ').map(Number);
  board = new Array(N).fill([]).map(() => new Array(M).fill(0));
  visited = new Array(N).fill([]).map(() => new Array(M).fill(false));
  locations = [];
  cnt = 0;

  for (let k=0; k<K; k++) {
    let [x, y] = input.pop().split(' ').map(Number);
    board[y][x] = 1;
    locations.push([y, x]);
  }

  locations.forEach(([n, m]) => {
    if (!visited[n][m]) {
      DFS(n, m);
      cnt++;
    }
  });
  answer.push(cnt);
}

console.log(answer.join('\n'));