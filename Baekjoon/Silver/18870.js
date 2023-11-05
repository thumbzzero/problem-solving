const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
input = input[1].split(' ').map(Number);

/* 서로 다른 좌표의 수 세야 하므로 중복되지 않도록 Set에 저장 */
let nums = new Set();

input.forEach(n => {
  nums.add(n);
})

nums = [...nums.keys()].sort((a, b) => b - a);

/* 모든 n마다 indexOf()을 하면 시간 초과 => 숫자별 인덱스(내림차순 순서) 미리 저장 */
let order = {};

nums.forEach((n, i) => {
  order[n] = i;
})

let answer = '';

input.forEach(n => {
  answer += `${nums.length - order[n] - 1} `;
})

console.log(answer);