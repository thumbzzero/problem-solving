const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

function decToBin(n) {
  let bin = [];

  while (n / 2 > 0) {
    bin.push(n % 2);
    n = Math.floor(n / 2);
  }

  return bin.reverse();
}

function solution(bin) {
  let answer = 0n;

  for (let i=0; i<bin.length; i++) {
    answer += (3n ** BigInt(i)) * BigInt(bin.at(-1-i));
  }

  return answer;
}

console.log(solution(decToBin(N)).toString());