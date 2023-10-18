const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = [parseInt(input[0]), parseInt(input[1])];
nums = input[2].split(' ').map(Number).sort((a, b) => a - b);

let [p1, p2] = [0, N-1];
let answer = 0;

while (p1 < p2) {
  if (nums[p1] + nums[p2] === M) {
    answer++; 
    p1++; 
    p2--;
  }
  else if (nums[p1] + nums[p2] < M) p1++;
  else p2--;
} 

console.log(answer);