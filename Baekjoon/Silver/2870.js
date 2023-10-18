const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input.shift());

let numbers = [];
const num = '0123456789'.split('');

function strToNumAndPush(str) {
  str = str.split('');
  while (str[0] === '0' && str.length > 1) str.shift();
  if (str.length) numbers.push(BigInt(str.join('')));
}

input.map((str) => {
  let temp = '';
  for (const c of str) {
    if (num.includes(c)) temp += c; 
    else {
      strToNumAndPush(temp);
      temp = '';
    }
  }
  if (temp.length) strToNumAndPush(temp);
});

numbers.sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0).map(n => console.log(String(n)));