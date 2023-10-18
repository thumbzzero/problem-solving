const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const vowel = ['a', 'e', 'i', 'o', 'u'];

function isAcceptable(pw) {
  if (!vowel.some((c) => pw.includes(c))) return false;

  let cnt1 = cnt2 = 0;  // 모음, 자음 카운트
  let previous = '';
  for (const c of pw) {    
    if (previous === c && c !== 'e' && c !== 'o') return false;
    if (vowel.includes(c)) {
      cnt1++;
      cnt2 = 0
    }
    else {
      cnt2++;
      cnt1 = 0;
    }
    if (cnt1 === 3 || cnt2 === 3) return false;
    previous = c;
  }
  return true;
}

input.map((pw) => {
  if (pw === 'end') return;
  console.log(`<${pw}> is ${isAcceptable(pw) ? 'acceptable' : 'not acceptable'}.`);
})