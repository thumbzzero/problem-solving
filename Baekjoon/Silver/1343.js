const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let ary = [''];
for (const c of input) {
  if (c === '.') {
    ary.push('.');
  } else if (ary[ary.length - 1] === '.') {
    ary.push('X');
  } else {
    ary[ary.length - 1] += 'X';
  }
}

function solution() {
  if (ary.length === 0) return -1;
  
  let answer = '';
  for (const str of ary) {
    let len = str.length;
    if (str === '.') answer += '.';
    else if (len % 2) return -1;
    else {
      while (len - 4 >= 0) {
        answer += 'AAAA';
        len -= 4;
      }
      if (len === 2) {
        answer += 'BB';
      }
    } 
  }

  return answer;
}

console.log(solution());