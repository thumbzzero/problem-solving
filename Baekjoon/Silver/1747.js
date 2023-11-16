const fs = require("fs");
let N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

const MAX = N*10;

function findPrimes() {
  let isPrime = new Array(MAX).fill(true);
  isPrime[0] = isPrime[1] = false;
  let p = 2;

  while (p*p < MAX) {
    if (isPrime[p]) {
      for (let i=p; p*i<MAX; i++) {
        isPrime[p*i] = false;
      }
    }  
    p++;
  }

  return isPrime;
}

function isPalindrome(n) {
  let ary = n.toString().split('');
  for (let i=0; i<Math.floor(n/2); i++) {
    if (ary[i] !== ary.at(-1-i)) return false;
  }

  return true;
}

const isPrime = findPrimes();
while (!(isPrime[N] && isPalindrome(N))) N++;

console.log(N);