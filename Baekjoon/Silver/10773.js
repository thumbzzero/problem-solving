const fs = require("fs");
const [K, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let nums = [];

input.forEach(n => {
  if (n === 0) {
    nums.pop();
    return;
  }
  nums.push(n);
})

if (nums.length === 0) {
  console.log(0);
} else {
  console.log(nums.reduce((total, current) => total + current));
}