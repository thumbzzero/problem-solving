const fs = require("fs");
const [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const ary = [3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1];
const counts = {};

ary.forEach((count, idx) => {
  counts[String.fromCharCode('A'.charCodeAt() + idx)] = count;
})

let nums = [], sums = [];
for (let i=0; i<A.length; i++) {
  nums.push(counts[A[i]]);
  nums.push(counts[B[i]]);
}

while (true) {
  for (let i=0; i<nums.length-1; i++) {
    sums.push((nums[i] + nums[i+1]) % 10);
  }
  nums = sums;
  sums = [];
  if (nums.length === 2) break;
}

console.log(nums.join(''));