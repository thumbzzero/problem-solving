const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);
const operators = input[2].split(' ').map(Number);

let max = -Infinity;
let min = Infinity

function calc(a, b, operator) {
  switch(operator) {
    case 0:
      return a + b;
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a >= 0 ? Math.floor(a / b) : -(Math.floor((-a) / b));
  }
}

function recur(value, n, operators) {
  if (n === N) {
    if (value > max) max = value;
    if (value < min) min = value;
    return;
  }

  for (let i=0; i < 4; i++) {
    if (operators[i]) {
      recur(calc(value, nums[n], i), n+1, operators.map((op, idx) => idx === i ? op - 1 : op));
    }
  }
}

recur(nums[0], 1, operators); 

console.log(max === 0 ? 0 : max);
console.log(min === 0 ? 0 : min);
