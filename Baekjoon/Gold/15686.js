const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(' ').map(Number);
const board = input.map(row => row.split(' ').map(Number));
let house = [], chicken = [];

board.forEach((row, idx1) => {
  row.forEach((cell, idx2) => {
    if (cell === 1) house.push([idx1, idx2]);
    else if (cell === 2) chicken.push([idx1, idx2]);
  })
});

let answer = Infinity;

let checked = new Array(chicken.length).fill(false);

function updateAnswer() {
  let d, sum = 0;
  house.forEach(h => {
    d = Infinity;
    chicken.forEach((c, idx) => {
      if (checked[idx]) {
        d = Math.min(d, Math.abs(h[0] - c[0]) + Math.abs(h[1] - c[1]));
      }
    })
    sum += d;
  })
  answer = Math.min(answer, sum)
}

function DFS(m, startIdx) {
  if (m === M) {
    updateAnswer();
    return;
  }
  for (let i=startIdx; i < chicken.length; i++) {    
    checked[i] = true;
    DFS(m+1, i+1);
    checked[i] = false;
  }
}

DFS(0, 0);
console.log(answer);