const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
let Map = input.map((line) => line.split(" ").map(Number));
let start = [];
Map.map((line, index) => {
  if (line.indexOf(2) !== -1) {
    start = [index, line.indexOf(2)];
    return;
  }
});

function OOB(x, y) {
  return x < 0 || x >= n || y < 0 || y >= m;
}

let answer = new Array(n).fill([]);
answer = answer.map(() => new Array(m).fill(0));

let visited = new Array(n).fill([]);
visited = visited.map(() => new Array(m).fill(0));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function BFS(startX, startY, cost) {
  let queue = [[startX, startY, cost]];
  while (queue.length > 0) {
    let [currentX, currentY, cost] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = currentX + dx[i];
      let ny = currentY + dy[i]
      if (OOB(nx, ny)) continue;
      if (Map[nx][ny] === 0) continue;
      if (visited[nx][ny] === 1) continue;

      visited[nx][ny] = 1;
      answer[nx][ny] = cost + 1;
      queue.push([nx, ny, cost + 1]);
    }
  }
}

answer[start[0]][start[1]] = 0;
visited[start[0]][start[1]] = 1;
BFS(start[0], start[1], 0);

visited.map((line, index) => {
  while (line.indexOf(0) !== -1) {
    if (Map[index][line.indexOf(0)]) answer[index][line.indexOf(0)] = -1;
    visited[index][line.indexOf(0)] = 1;
  }
});

console.log(answer.map((answer) => answer.join(" ")).join("\n"));
