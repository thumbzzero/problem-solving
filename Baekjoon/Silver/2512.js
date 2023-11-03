const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const M = parseInt(input[2]);
const request = input[1].split(' ').map(Number);

function getTotal(limit) {
  return request.reduce((total, current) => {
    return total += current <= limit ? current : limit;
  }, 0)
}

function binarySearch(start, end) {
  let mid = Math.floor((start + end) / 2);
  let total = getTotal(mid);
  if (start > end) return end;
  if (total < M) return binarySearch(mid + 1, end);
  if (total > M) return binarySearch(start, mid - 1);
  return mid;
}

console.log(binarySearch(0, Math.max(...request)));
