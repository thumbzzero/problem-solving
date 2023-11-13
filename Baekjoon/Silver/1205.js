const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, newScore, P] = input[0].split(' ').map(Number);

// 랭킹 리스트에 등록된 점수 없으면 무조건 1등
if (N === 0) {
  console.log(1);
  return;
}

const scores = input[1].split(' ').map(Number);

let hash = {};
let next = -1;

scores.forEach((score, index) => {
  if (hash[score] === undefined) {
    hash[score] = index + 1;
  }
  if (next === -1 && score < newScore) next = score;
})

function solution() {
  // 점수판 꽉 차있고 새 점수가 이전 점수보다 더 좋지 않은 경우
  if (N >= P && scores[scores.length-1] >= newScore) return -1;
  
  if (hash[newScore] !== undefined) return hash[newScore];
  if (next === -1) return N+1;
  return hash[next];
}

console.log(solution());