const fs = require("fs");
const [N, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let hash = {};
let max = 0;
let answer = '' ;

for (let i=0; i<N; i++) {
  let book = input[i];
  if (hash[book] === undefined) hash[book] = 1;
  else hash[book] += 1;

  if (max < hash[book]) {
    max = hash[book];
    answer = book;
  } else if (max === hash[book]) {
    answer = answer < book ? answer : book;
  }
}

console.log(answer);
