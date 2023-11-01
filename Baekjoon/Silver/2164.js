const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let queue = [];
for (let i=1; i<=N; i++) {
  queue.push(i);
}

let i=0;
while (i < queue.length - 1) {
  i++;
  queue.push(queue[i++]);
}

console.log(queue.pop());