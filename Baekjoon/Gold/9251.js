const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [str1, str2] = input.map((str) => ` ${str}`);
let cache = new Array(str1.length).fill([]).map(() => new Array(str2.length).fill(-1));

/* LCS(Longest Common Subsequence, 최장 공통 부분 수열)의 길이 */
function f(i, j) {
  if (cache[i][j] !== -1) return cache[i][j];
  if (i === 0 || j === 0) cache[i][j] = 0;
  else if (str1[i] === str2[j]) cache[i][j] = f(i-1, j-1) + 1; 
  else cache[i][j] = Math.max(f(i-1, j), f(i, j-1));
  return cache[i][j];
}

console.log(f(str1.length-1, str2.length-1));