const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, ...nums] = input.map(Number);
const sortedNums = nums.sort((a, b) => a - b);

function sum(nums) {
  return nums.reduce((total, current) => {
    return total + current;
  });
}

let avg, mid, freq, range;
let count = {}, maxFreq = 0, order = 0;

avg = Math.round(sum(nums) / N);
mid = sortedNums[Math.floor(N/2)];
range = sortedNums[N-1] - sortedNums[0];

for (const n of sortedNums) {
  if (count[n] === undefined) count[n] = 1;
  else count[n]++;

  if (maxFreq < count[n]) {
    maxFreq = count[n];
    freq = n;
    order = 1;
  } else if (maxFreq === count[n]) {
    if (++order === 2) freq = n;
  }
}

console.log([avg, mid, freq, range].join('\n'));