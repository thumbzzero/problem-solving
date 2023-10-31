const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
people = input.map((p) => p.split(' ').map(Number));

function solution(i) {
  a = people[i];
  let k=0;
  people.forEach((b, idx) => {
    if (idx === i) return;
    if (a[0] < b[0] && a[1] < b[1]) k++;
  })
  return k+1;
}

let answer = '';
people.forEach((p, i) => answer += `${solution(i)} `);
console.log(answer);