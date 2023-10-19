const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = parseInt(input);
console.log(N % 2 ? 'SK' : 'CY');