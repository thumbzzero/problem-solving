const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(' ').map(Number);
const board = input.map(row => row.split('').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];


let queue = [];
let visited = new Array(N).fill([]).map(() => new Array(M).fill(false));
let answer = new Array(N).fill([]).map(() => new Array(M).fill(false));

function OOB(n, m) {
  return n < 0 || n >= N || m < 0 || m >= M;
}

function BFS() {
  queue.push([0, 0]);
  visited[0][0] = true;
  answer[0][0] = 1;

  while (queue.length) {
    let [cx, cy] = queue.shift();
    let cost = answer[cx][cy];
    for (let i=0; i<4; i++) {
      let [nx, ny] = [cx+dx[i], cy+dy[i]];
      if (OOB(nx, ny)) continue;
      if (visited[nx][ny]) continue;
      if (!board[nx][ny]) continue;
      queue.push([nx, ny]);
      visited[nx][ny] = true;
      answer[nx][ny] = cost + 1;
      if (nx === N-1 && ny === M-1) return answer[nx][ny];
    }
  }
}

console.log(BFS());