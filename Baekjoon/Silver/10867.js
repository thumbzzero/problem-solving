const fs = require("fs");
let [N, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

answer = new Set(input.split(' ').map(Number).sort((a, b) => a - b));

console.log([...answer].join(' '));