const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const queue = [];
let front = 0;
let answer = [];

const isEmpty = () => queue.length <= front;

for (const command of input) {
  if (command.startsWith("push")) {
    const num = Number(command.split(" ")[1]);
    queue.push(num);
  } else if (command === "pop") {
    answer.push(isEmpty() ? -1 : queue[front++]);
  } else if (command === "size") {
    answer.push(queue.length - front);
  } else if (command === "empty") {
    answer.push(isEmpty() ? 1 : 0);
  } else if (command === "front") {
    answer.push(isEmpty() ? -1 : queue[front]);
  } else {
    answer.push(isEmpty() ? -1 : queue.at(-1));
  }
}

console.log(answer.join("\n"));
