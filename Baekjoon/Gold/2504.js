const fs = require("fs");
const input = fs
  .readFileSync(
    "/dev/stdin"
  )
  .toString()
  .trim()
  .split("\n")[0]
  .split("");

function sum(nums) {
  return nums.reduce((total, current) => {
    return total + current;
  }, 0);
}

let stack = [];

let value = {
  ')': 2,
  ']': 3,
};

let pair = {
  ')': '(',
  ']': '[',
};

function solution() {
  let temp = 0;

  for (let i=0; i < input.length; i++) {
    let c = input[i];
    if (c === '(' || c === '[') {
      stack.push(c);
      continue;
    }

    let top = stack[stack.length - 1];
    while (typeof top === 'number') {
      stack.pop();
      temp += top;
      top = stack[stack.length - 1];
    }
    if (top === pair[c]) {
      stack.pop();
      stack.push(Math.max(value[c], value[c] * temp));
      temp = 0;
    } else return 0;
  }
  let answer = sum(stack);
  if (typeof answer === 'string') return 0;
  return answer;
}

console.log(solution());
