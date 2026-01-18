const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const frac1 = input[0].split(' ').map(Number);
const frac2 = input[1].split(' ').map(Number)

const numerator = 0;
const denominator = 1;

function getGCD(a, b) {
  if (b === 0) return a;
  return getGCD(b, a % b);
}

const sum = [
  frac1[numerator] * frac2[denominator] + frac2[numerator] * frac1[denominator],
  frac1[denominator] * frac2[denominator]
];

const gcd = getGCD(sum[numerator], sum[denominator]);
console.log(sum[numerator] / gcd, sum[denominator] / gcd);
