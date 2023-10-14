const fs = require("fs");
const input = fs
  .readFileSync(
    "/dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

let S = parseInt(input[0]);
let N = 0;
let i = 1;

while (S - i > i) {
  S -= i;
  i++;
  N++;
}

console.log(++N);