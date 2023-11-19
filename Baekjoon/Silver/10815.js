const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const cards = input[1].split(' ').map(Number).sort((a, b) => a - b);
const nums = input[3].split(' ').map(Number);

let answer = '';

function binarySearch(start, end, num) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);

  if (cards[mid] > num) return binarySearch(start, mid-1, num);
  if (cards[mid] < num) return binarySearch(mid+1, end, num);
  return mid;
}

nums.forEach((num) => answer += `${binarySearch(0, N-1, num) === -1 ? '0' : '1'} `)

console.log(answer);