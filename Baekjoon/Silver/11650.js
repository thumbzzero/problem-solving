const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
let points = input.map((point) => point.split(' ').map(Number));

points.sort((a, b) => (a[0] !== b[0]) ? a[0]-b[0] : a[1]-b[1]);

let answer = '';
points.forEach((point) => answer += `${point[0]} ${point[1]}\n`);
console.log(answer);