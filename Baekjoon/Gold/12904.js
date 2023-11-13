const fs = require("fs");
let [S, T] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((str) => str.split(''));

function isEqual() {
  for (let i=0; i<S.length; i++) {
    if (S[i] !== T[i]) return false;
  }
  return true;
}

/*
문자열 T의 끝이 
(1) 'A'이면 뒤에 'A'를 추가하는 연산을 한 것
(2) 'B'이면 문자열을 뒤집고 뒤에 'B'를 추가하는 연산을 한 것
*/

while (S.length < T.length) {
  if (T.at(-1) === 'A') T.pop();
  else {
    T.pop();
    T.reverse();
  }
}

if (isEqual()) console.log(1);
else console.log(0);