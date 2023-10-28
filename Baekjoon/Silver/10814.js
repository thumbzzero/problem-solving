const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
let people = input.map((p) => p.split(' ').map((x, i) => i===0 ? parseInt(x) : x));

let answer = '';
people.sort((a, b) => a[0] - b[0]).map((p) => answer += `${p[0]} ${p[1]}\n`);
console.log(answer);