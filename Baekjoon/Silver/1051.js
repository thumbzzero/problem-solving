const fs = require("fs");
const input = fs
  .readFileSync(
    "/dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const rec = input.map((row) => row.split("").map(Number));

let answer = 1;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < m - 1; j++) {
    let [startX, startY] = [i, j];
    let start = rec[startX][startY];
    let rest = rec[startX].slice(startY + 1);
    rest.map((element, index) => {
      if (element === start) {
        let temp = check(start, startX, startY, index + startY + 1);
        if (temp > answer) answer = temp;
      }
    });
  }
}

function check(start, startX, startY, endY) {
  let diff = endY - startY;
  if (startX + diff >= n) return -1;
  if (rec[startX + diff][startY] === start && rec[startX + diff][endY] === start) {
    return Math.pow(diff + 1, 2);
  }
  return -1;
}

console.log(answer);
