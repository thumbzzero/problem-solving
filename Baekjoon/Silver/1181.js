const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, ...words] = [parseInt(input.shift()), ...input];

let answer = "";
words
  .sort()
  .sort((a, b) => a.length - b.length)
  .filter((current, index, ary) => current !== ary[index+1])
  .map((word) => (answer += `${word}\n`));

console.log(answer);