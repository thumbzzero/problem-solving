const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let cnt = 1, answer = 666;

while (cnt < N) {
  answer++;
  if ((answer + '').includes('666')) cnt++;
}

console.log(answer);