const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let deque = [];
let answer = [];

for (let i=1; i<=N; i++) {
  let [command, x] = input[i].split(' ');
  switch (command) {
    case 'push_front': {
      deque = [x, ...deque];
      break;
    }
    case 'push_back': {
      deque.push(x);
      break;
    }
    case 'pop_front': {
      answer.push(deque.length ? deque[0] : -1);
      deque = deque.slice(1);
      break;
    }
    case 'pop_back': {
      answer.push(deque.pop() ?? -1);
      break;
    }
    case 'size': {
      answer.push(deque.length);
      break;
    }
    case 'empty': {
      answer.push(deque.length ? 0 : 1);
      break;
    }
    case 'front': {
      answer.push(deque.length ? deque[0] : -1);
      break;
    }
    case 'back': {
      answer.push(deque.length ? deque.at(-1) : -1);
      break;
    }
  }
}

console.log(answer.join('\n'));