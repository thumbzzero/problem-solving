const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(' ').map(Number);
const board = input.map((row) => row.split(''));

let counts = [];

for (let n=0; n <= N-8; n++) {
  for (let m=0; m <= M-8; m++) {
    let cnt1 = cnt2 = 0;
    let start1 = 'W', end1 = 'B';
    let start2 = 'B', end2 = 'W';
    let a = 0;
    while (a < 8) {
      for (let i=0; i<8-a; i++) {
        if (i === 0) {
          if (board[n+a][m+a] !== start1) cnt1++;
          if (board[n+a][m+a] !== start2) cnt2++;
        }
        else if (i % 2) {
          if (board[n+a][m+a+i] !== end1) cnt1++;
          if (board[n+a+i][m+a] !== end1) cnt1++;
          if (board[n+a][m+a+i] !== end2) cnt2++;
          if (board[n+a+i][m+a] !== end2) cnt2++;
        }
        else {
          if (board[n+a][m+a+i] !== start1) cnt1++;
          if (board[n+a+i][m+a] !== start1) cnt1++;
          if (board[n+a][m+a+i] !== start2) cnt2++;
          if (board[n+a+i][m+a] !== start2) cnt2++;
        }
      }
      a++;
    }
    counts.push(cnt1);
    counts.push(cnt2);
  }
}

console.log(Math.min(...counts));