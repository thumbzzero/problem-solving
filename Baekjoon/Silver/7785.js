const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
input = input.map((log) => log.split(' '));

let log = {};

input.forEach(([name, type]) => {
  if (type === 'enter') {
    log[name] = 1;
  } else {
    delete log[name];
  }
});

console.log(Object.keys(log).sort().reverse().join('\n'));