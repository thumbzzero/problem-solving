const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

function binarySearch(start, end) {
  let mid = Math.floor((start + end) / 2);
  let sum = trees.reduce((total, current) => {
    return total += current - mid > 0 ? current - mid : 0;
  }, 0); 
  if (start > end) return end;
  if (sum > M) return binarySearch(mid + 1, end);
  if (sum < M) return binarySearch(start, mid - 1);
  return mid;
}

console.log(binarySearch(0, Math.max(...trees)));