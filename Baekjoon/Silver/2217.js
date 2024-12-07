const fs = require("fs");
const [N, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
input.sort((a, b) => b - a);

let answer = 0;
/*
(1) 로프 하나만 사용 시: 최대 w = 그 로프가 들 수 있는 w
(2) 로프 병렬 연결 시: 최대 w = N * min(w0, w1, ..., wN-1);
*/

for (const [index, rope] of input.entries()) {
  let w = Math.max(rope, (index + 1) * rope);
  if (w > answer) answer = w;
}

console.log(answer);
