const fs = require("fs");
const input = fs
  .readFileSync(
    "/dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const MAP = input.map((line) => line.split(" ").map(Number));

let zeroIndex = [];
let twoIndex = [];

MAP.map((line, indexX) => {
  line.map((element, indexY) => {
    if (element === 0) {
      zeroIndex.push([indexX, indexY]);
    }
    if (element === 2) {
      twoIndex.push([indexX, indexY]);
    }
  });
});

const zeroCount = zeroIndex.length;
let zeroPair = [];
for (let i = 0; i < zeroCount - 2; i++) {
  for (let j = i + 1; j < zeroCount - 1; j++) {
    for (let k = j + 1; k < zeroCount; k++) {
      zeroPair.push([zeroIndex[i], zeroIndex[j], zeroIndex[k]]);
    }
  }
}

function OOB(x, y) {
  return x < 0 || x >= N || y < 0 || y >= M;
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let answer = -1;

function BFS(newWalls) {
  let queue = [];
  twoIndex.map((virus) => queue.push(virus));

  let visited = new Array(N).fill([]).map(() => new Array(M).fill(0));
  let after = MAP.map((line) => line.slice());
  newWalls.map((wall) => (after[wall[0]][wall[1]] = 1));

  while (queue.length > 0) {
    let [currentX, currentY] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = currentX + dx[i];
      let ny = currentY + dy[i];
      if (OOB(nx, ny)) continue;
      if (visited[nx][ny]) continue;
      if (after[nx][ny]) continue;

      visited[nx][ny] = 1;
      after[nx][ny] = 2;
      queue.push([nx, ny]);
    }
  }
  let safetySize = 0;
  after.map((row) => {
    row.map((element) => {
      if (element === 0) safetySize++;
    });
  });

  if (safetySize > answer) answer = safetySize;
}

zeroPair.map((newWalls) => BFS(newWalls));

console.log(answer);
