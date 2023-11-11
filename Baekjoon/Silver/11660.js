const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(' ').map(Number);
let table = [], xys = [];

input.forEach((row, idx) => {
  if (idx < N) {
    table.push(row.split(' ').map(Number));
  } else {
    xys.push(row.split(' ').map(Number).map(n => n-1));
  }
});

// (0,0)부터 (i,j)까지의 누적합 저장
let cache = new Array(N).fill([]).map(() => new Array(N).fill(0));

table.forEach((row, i) => {
  row.forEach((num, j) => {
    if (i === 0 && j === 0) {
      cache[i][j] = num;
    } else if (i === 0) {
      cache[i][j] = cache[i][j-1] + num;
    } else if (j === 0) {
      cache[i][j] = cache[i-1][j] + num;
    } else {
      cache[i][j] = cache[i][j-1] + cache[i-1][j] - cache[i-1][j-1] + num;
    }
  })
})

function f(x1, y1, x2, y2) {
  if (x1 === 0 && y1 === 0) return cache[x2][y2];
  if (x1 === x2 && y1 === y2) return table[x1][y1];
  else if (x1 === 0) return cache[x2][y2] - cache[x2][y1-1];
  else if (y1 === 0) return cache[x2][y2] - cache[x1-1][y2];
  return cache[x2][y2] - cache[x1-1][y2] - cache[x2][y1-1] + cache[x1-1][y1-1];
}

let answer = '';
for (let i=0; i<M; i++) {
  let [x1, y1, x2, y2] = xys[i];
  answer += `${f(x1, y1, x2, y2)}\n`;
}

console.log(answer);