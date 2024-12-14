const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = '';
let isTag = false;
let temp = '';

for (const c of input) {
  /* 태그 처리 */
  if (c === '<') {
    isTag = true;
    answer += temp.split('').reverse().join('');
    answer += c;
    temp = '';
    continue;
  } else if (c === '>') {
    isTag = false;
    answer += c;
    continue;
  } else if (isTag) {
    answer += c;
    continue;
  }

  /* 문자열 처리 */
  if (c === ' ') {
    answer += `${temp.split('').reverse().join('')} `;
    temp = '';
  } else {
    temp += c;
  }
}

if (!isTag && temp) {
  answer += temp.split('').reverse().join('');
}

console.log(answer);
