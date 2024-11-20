const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const T = Number(input[idx++]);
let nums1, nums2;
let hash = {};
let answer = [];

function binarySearch(start, end, target) {
  if (start > end) return -1;
  let mid = Math.floor((start - end) / 2 + end);

  if (nums1[mid] > target) return binarySearch(start, mid-1, target);
  if (nums1[mid] < target) return binarySearch(mid+1, end, target);
  return mid;
}

for (let t=0; t<T; t++) {
  hash = {};
  idx++;
  nums1 = input[idx++].split(' ').map(Number).sort((a, b) => a - b);
  idx++;
  nums2 = input[idx++].split(' ').map(Number);
 
  for (const num of nums2) {
    if (hash[num] === undefined) {
      hash[num] = binarySearch(0, nums1.length - 1, num) === -1 ? 0 : 1;
    }
    answer.push(hash[num]);
  }
}

console.log(answer.join('\n'));
