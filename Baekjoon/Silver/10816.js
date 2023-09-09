const fs = require("fs");
const input = fs
  .readFileSync(
    "/dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());
let cards = input.shift().split(" ").map(Number);
const M = parseInt(input.shift());
const numbers = input.shift().split(" ").map(Number);

cards.sort((a, b) => a - b);

let hash = new Map();

cards.map((card) => {
  if (hash.has(card)) hash.set(card, hash.get(card) + 1);
  else hash.set(card, 1);
})

let answer = [];

function solution(start, end, n) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (cards[mid] > n) {
      end = mid - 1;
    }
    else if (cards[mid] < n) {
      start = mid + 1;
    } 
    else return mid;
  }
  return -1;
}

for (let i = 0; i < M; i++) {
  let index = solution(0, N - 1, numbers[i]);
  if (index === -1) {
    answer.push(0);
    continue;
  }
  answer.push(hash.get(numbers[i]));
}

console.log(answer.join(" "));
