const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [A, B] = input.split(' ')
const [lenA, lenB] = [A.length, B.length];

function calcDiff(str1, str2) {
  let diff = 0;
  for (let i=0; i<lenA; i++) {
    if (str1[i] !== str2[i]) diff++;
  }
  return diff;
}

function solution() {
  if (lenA === lenB) return calcDiff(A, B);

  let answer = Infinity;
  for (let i=0; i <= lenB - lenA; i++) {
    answer = Math.min(answer, calcDiff(A, B.slice(i, i + lenA)));
  }
  return answer;
}

console.log(solution());